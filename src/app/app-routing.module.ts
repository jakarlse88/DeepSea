import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MusicListComponent } from './music-list/music-list.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'music', component: MusicListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }