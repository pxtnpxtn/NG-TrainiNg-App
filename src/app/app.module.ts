import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

// var config = {
//   apiKey: "AIzaSyDx48NubMZc6pfnXgFpPD7Y5GMfGpwfPqs",
//   authDomain: "living-well-c0f88.firebaseapp.com",
//   databaseURL: "https://living-well-c0f88.firebaseio.com",
//   projectId: "living-well-c0f88",
//   storageBucket: "living-well-c0f88.appspot.com",
//   messagingSenderId: "35956981233"
// }; 