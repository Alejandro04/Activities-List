import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  items: any;

  constructor(private connection: ConnectionService) {
    this.connection.ActivitiesList().subscribe(item=>{
      this.items = item
      console.log(this.items)
    })
  }

  ngOnInit() {
  }

}
