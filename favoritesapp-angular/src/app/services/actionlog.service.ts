// ../src/app/services/actionlog.service.ts

import Log from '../models/actionlog.model';
import Favorite from '../models/favorite.model';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, filter, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class LogService {

  api_url = 'http://localhost:3000';
  logsUrl = `${this.api_url}/api/logs`;

  constructor(
    private http: HttpClient
  ) { }

    // Create log, takes a Log Object
    createLog(favorite: Favorite, action: string): Observable<any> {
        const log: Log = new Log();
        log.websiteName = favorite.websiteName;
        log.websiteURL = favorite.websiteURL;
        log.action = action;
        // returns the observable of http post request.
        return this.http.post(`${this.logsUrl}`, log);
    }

    // Read log, takes no arguments
    getLogs(): Observable<Log[]> {
        return this.http.get(this.logsUrl)
        .pipe(
            map(res  => {
            // Maps the response object sent from the server
            return res['data'] as Log[];
        }));
    }


    // Default Error handling method.
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
