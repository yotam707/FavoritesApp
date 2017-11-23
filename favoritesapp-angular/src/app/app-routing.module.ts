import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionLogComponent } from './action-log/action-log.component';
import { AppFavoriteComponent } from './app-favorite/app-favorite.component';

const routes: Routes = [
  { path: '', redirectTo: '/favorites', pathMatch: 'full' },
  { path: 'favorites', component: AppFavoriteComponent  },
  { path: 'logs', component: ActionLogComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
