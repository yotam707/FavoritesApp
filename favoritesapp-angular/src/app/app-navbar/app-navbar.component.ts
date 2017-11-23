import { Component, OnInit } from '@angular/core';
import { IsGridService } from '../services/isgrid.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})
export class AppNavbarComponent {
  isGrid = false;

  constructor(private data: IsGridService) {
  }
}
