import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,MatCardModule,MatFormFieldModule } from '@angular/material';
import { MaterialModule } from './material/material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AddpetComponent } from './addpet/addpet.component';
import { TestComponent } from './test/test.component';

firebase.initializeApp({
  apiKey: "AIzaSyCP5YMz5d8Xk8Sx3Av0pUSsWi_itB1jrqo",
  authDomain: "hackathon-404f0.firebaseapp.com",
  databaseURL: "https://hackathon-404f0.firebaseio.com",
  projectId: "hackathon-404f0",
  storageBucket: "",
  messagingSenderId: "1084657641321",
  appId: "1:1084657641321:web:018747a7a4ea6145aefff8"
});

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    AddpetComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MaterialModule,
    MatCardModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
