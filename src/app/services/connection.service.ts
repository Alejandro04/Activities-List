import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//agregar los campos de la db
export interface Item { name: string; }

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  private itemDoc: AngularFirestoreDocument<Item>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('items'); // items = nombre de la coleccion
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }


  // para mostrar los resultados en un componente debemos crear una funcion que retorne los datos.
  ActivitiesList() {
    return this.items;
  }

  addActivity(item: Item) {
    this.itemsCollection.add(item);
  }

  deleteActivity(item){
    this.itemDoc = this.afs.doc<Item>(`items/${item.id}`);
    this.itemDoc.delete();
  }

  updateItem(item){
    this.itemDoc = this.afs.doc<Item>(`items/${item.id}`);
    this.itemDoc.update(item);
  }
}
