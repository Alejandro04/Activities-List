import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  items: any;

  updateItem:any = {
    name: ''
  }

  constructor(private connection: ConnectionService) {
    this.connection.ActivitiesList().subscribe(item=>{
      this.items = item
      console.log(this.items)
    })
  }

  ngOnInit() {
  }

  delete(item){
    this.connection.deleteActivity(item);
  }

  update(item){
    this.updateItem = item;
  }

  addUpdatedItem(){
    this.connection.updateItem(this.updateItem);
  }
}