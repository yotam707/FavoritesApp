import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FavoriteService } from './services/favorite.service';
import { LogService } from './services/actionlog.service';
import { IsGridService } from './services/isgrid.service';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { SearchFilterPipe } from './pipes/favorite-search.pipe';
import { DateTimeFormatPipe } from './pipes/datetime-format.pipe';
import { ActionLogComponent } from './action-log/action-log.component';
import { AppRoutingModule } from './app-routing.module';
import { AppFavoriteComponent } from './app-favorite/app-favorite.component';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    SearchFilterPipe,
    DateTimeFormatPipe,
    ActionLogComponent,
    AppFavoriteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [FavoriteService, IsGridService, NgbModule, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
