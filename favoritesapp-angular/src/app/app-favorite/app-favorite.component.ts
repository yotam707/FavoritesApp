import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FavoriteService } from './../services/favorite.service';
import { LogService } from './../services/actionlog.service';
import Favorite from './../models/favorite.model';
import Log from './../models/actionlog.model';
import { IsGridService } from './../services/isgrid.service';

enum LogActions {
  add = 'ADD',
  edit = 'EDIT',
  delete = 'DELETE'
}
@Component({
  selector: 'app-favorite',
  templateUrl: './app-favorite.component.html',
  styleUrls: ['./app-favorite.component.scss']
})


export class AppFavoriteComponent implements OnInit {

  constructor(private favoriteService: FavoriteService, private data: IsGridService,
     private modalService: NgbModal, private logService: LogService) {
    this.changeIsGrid();
  }

  private modalRef: NgbModalRef;
  public newFavorite: Favorite = new Favorite();
  public deletedFavorite: Favorite = new Favorite();
  favoritesList: Favorite[];
  editFavorites: Favorite[] = [];
  isGrid = true;

  ngOnInit() {
    this.data.isGridEvent.subscribe(isGrid => {
      this.isGrid = isGrid;
    });
    this.favoriteService.getFavorites()
    .subscribe(favorites => {
      this.favoritesList = favorites;
      console.log(favorites);
    });
  }
  open(modal) {
    this.modalRef = this.modalService.open(modal);
  }

  openDelete(favorite: Favorite , modal) {
    console.log('delete');
    this.deletedFavorite = favorite;
    this.modalRef = this.modalService.open(modal);
  }
  changeIsGrid() {
    this.data.isGrid(this.isGrid);
    this.isGrid = !this.isGrid;
    console.log('from nav', this.isGrid);
  }

  create() {
    this.newFavorite.websiteURL = 'http://' + this.newFavorite.websiteURL;
    this.favoriteService.createFavorite(this.newFavorite)
    .subscribe((res) => {
      this.favoritesList.push(res.data);
      this.newFavorite = new Favorite();
    });
    this.logService.createLog(this.newFavorite, LogActions.add.toString())
    .subscribe((res) => {
      console.log('log updated');
    }, err => {
      console.error('log Failed');
    });
    this.modalRef.close();
  }

  deleteFavorite(deleteFavorite: Favorite) {
    this.favoriteService.deleteFavorite(deleteFavorite._id)
    .subscribe(res => {
      this.favoritesList.splice(this.favoritesList.indexOf(deleteFavorite), 1);
      this.deletedFavorite = new Favorite();
    });
    this.logService.createLog(deleteFavorite, LogActions.delete.toString())
    .subscribe((res) => {
      console.log('log updated');
    }, err => {
      console.error('log Failed');
    });
    this.modalRef.close();
  }

  cancelEditFavorite() {
    this.editFavorites = [];
  }

  editFavorite(favorite: Favorite) {
    console.log(favorite);
    if (this.favoritesList.includes(favorite)) {
      if (!this.editFavorites.includes(favorite)) {
            this.editFavorites.push(favorite);
      }else {
        this.editFavorites.splice(this.editFavorites.indexOf(favorite), 1);
        this.favoriteService.editFavorite(favorite).subscribe(res => {
          console.log('Update Successful');
        }, err => {
          this.editFavorite(favorite);
          console.error('Update Failed');
        });
        this.logService.createLog(this.newFavorite, LogActions.delete.toString())
        .subscribe((res) => {
          console.log('log updated');
        }, err => {
          console.error('log Failed');
        });
      }
    }
  }

  doneFavorite(favorite: Favorite) {
    this.favoriteService.editFavorite(favorite).subscribe(res => {
      console.log('Update Successful');
    }, err => {
      this.editFavorite(favorite);
      console.error('Update Failed');
    });
  }

  submitFavorite(event, favorite: Favorite) {
    if (event.keyCode === 13) {
      this.editFavorite(favorite);
    }
  }
}
