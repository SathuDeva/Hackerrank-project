import { Injectable } from '@angular/core';

import { AngularFireAuthModule } from '@angular/fire/auth';
import  * as firebase from 'firebase';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
email: string;
signupemail: string;
  constructor(private auth: AngularFireAuthModule, private router:Router ) { }

login(email,password){
  this.email = email;

  return firebase.auth().signInWithEmailAndPassword(email,password)
  .then((data)=>{
    console.log(data);
    console.log("data");
    this.router.navigateByUrl('/home')

  }).catch((err)=>{
    console.log(err);

  })
}

onsignup(email,password,fname,phonenumber,bio,address){
  this.signupemail=email;
  firebase.firestore().collection("petowner").add(
    {
      email:email,
      name:fname,
      phonenumber:phonenumber,
      address:address,
      bio:bio,
    }).then(()=>{
        console.log("fdf")
    })
  return firebase.auth().createUserWithEmailAndPassword(email,password)
  .then((data)=>{
    console.log(data);
    console.log("data");

    this.router.navigateByUrl('/addpet')

  }).catch((err)=>{
    console.log(err);

  })

}

getmail(){
  return this.email;
}

getpetmail(){
  return this.signupemail;
}

}
