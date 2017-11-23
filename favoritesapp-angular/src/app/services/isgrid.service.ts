import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, filter, tap } from 'rxjs/operators';
import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class IsGridService {

    isGridEvent = new EventEmitter<boolean>();

    isGrid(_isGrid: boolean) {
        this.isGridEvent.emit(_isGrid);
        console.log(_isGrid);
    }
}
