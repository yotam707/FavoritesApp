import { Component, OnInit } from '@angular/core';
import { LogService } from './../services/actionlog.service';
import Log from './../models/actionlog.model';


enum LogActions {
  add = 'ADD',
  edit = 'EDIT',
  delete = 'DELETE'
}


@Component({
  selector: 'app-action-log',
  templateUrl: './action-log.component.html',
  styleUrls: ['./action-log.component.scss']
})

export class ActionLogComponent implements OnInit {

  constructor(private logService: LogService) { }

  logsList: Log[];


  ngOnInit() {
    this.logService.getLogs()
    .subscribe(logs => {
      this.logsList = logs;
      console.log(logs);
    });
  }

}
