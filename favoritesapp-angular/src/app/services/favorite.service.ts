// ../src/app/services/favorite.service.ts

import Favorite from '../models/favorite.model';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, filter, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class FavoriteService {

  api_url = 'http://localhost:3000';
  favoriteUrl = `${this.api_url}/api/favorites`;

  constructor(
    private http: HttpClient
  ) { }

    // Create favorite, takes a Favorite Object
    createFavorite(favorite: Favorite): Observable<any> {
        // returns the observable of http post request.
        return this.http.post(`${this.favoriteUrl}`, favorite);
    }

    // Read favorite, takes no arguments
    getFavorites(): Observable<Favorite[]> {
        return this.http.get(this.favoriteUrl)
        .pipe(
            map(res  => {
            // Maps the response object sent from the server
            return res['data'].docs as Favorite[];
        }));
    }

    // Update favorite, takes a Favorite Object as parameter
    editFavorite(favorite: Favorite) {
        const editUrl = `${this.favoriteUrl}`;
        // returns the observable of http put request
        return this.http.put(editUrl, favorite);
    }

    deleteFavorite(id: string): any {
        // Delete the object by the id
        const deleteUrl = `${this.favoriteUrl}/${id}`;
        return this.http.delete(deleteUrl)
        .pipe(
            map(res  => {
                return res;
            })
        );
    }

    // Default Error handling method.
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
