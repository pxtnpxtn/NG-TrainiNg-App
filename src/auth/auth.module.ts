import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


// Third-party Modules
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// Shared Modules
import { SharedModule } from './shared/shared.module';

export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', loadChildren: './login/login.module#LoginModule' },
      { path: 'register', loadChildren: './register/register.module#RegisterModule' }
    ]
  }
]

export const firebaseConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyDx48NubMZc6pfnXgFpPD7Y5GMfGpwfPqs",
  authDomain: "living-well-c0f88.firebaseapp.com",
  databaseURL: "https://living-well-c0f88.firebaseio.com",
  projectId: "living-well-c0f88",
  storageBucket: "living-well-c0f88.appspot.com",
  messagingSenderId: "35956981233"
};


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule.forRoot()
  ]
})
export class AuthModule { }

