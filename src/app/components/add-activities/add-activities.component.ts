import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-add-activities',
  templateUrl: './add-activities.component.html',
  styleUrls: ['./add-activities.component.css']
})
export class AddActivitiesComponent implements OnInit {

  item: any = {
    name: ''
  }

  constructor(private service: ConnectionService) {

  }

  ngOnInit() {
  }

  add(){
    this.service.addActivity(this.item);
    this.item.name = '';
  }

}
