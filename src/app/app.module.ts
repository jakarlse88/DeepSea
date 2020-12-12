import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MusicListComponent } from './music-list/music-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SuccessComponent,
    MusicListComponent
  ],
  imports: [
    AppRoutingModule
    , BrowserAnimationsModule
    , BrowserModule
    , MatButtonModule
    , MatCardModule
    , MatGridListModule
    , MatIconModule
    , MatInputModule
    , MatPaginatorModule
    , MatRadioModule
    , MatSelectModule
    , MatSortModule
    , MatTableModule
    , ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
