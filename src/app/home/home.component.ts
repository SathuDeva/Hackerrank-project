import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { CrudService } from '../crud.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ownerdetails:any[];
  petdetails:any[];
  pet2details:any[];
  pet3details:any[];
  b:boolean=false;
  c:boolean=false;
  d:boolean=false;
  img:string;
  constructor(private crudService: CrudService,private router:Router) { }

  ngOnInit() {
    console.log(this.crudService.getmail());
    firebase.firestore().collection('petowner').where('email','==',this.crudService.getmail()).get().then((queryDocumentSnapshot)=>{

      console.log(queryDocumentSnapshot.docs.map(doc=>({
        __id: doc.id, ...doc.data()
      })));
      this.ownerdetails = queryDocumentSnapshot.docs.map(doc=>({
        __id: doc.id, ...doc.data()
      }));

    });

    firebase.firestore().collection('pet').where('email','==',this.crudService.getmail()).get().then((queryDocumentSnapshot)=>{

      console.log(queryDocumentSnapshot.docs.map(doc=>({
        __id: doc.id, ...doc.data()
      })));
      this.petdetails = queryDocumentSnapshot.docs.map(doc=>({
        __id: doc.id, ...doc.data()
      }));
      this.img=this.petdetails[0].url;

    });

    firebase.firestore().collection('pet2').where('email','==',this.crudService.getmail()).get().then((queryDocumentSnapshot)=>{
      this.b=true;
      console.log(this.b);
      console.log(queryDocumentSnapshot.docs.map(doc=>({
        __id: doc.id, ...doc.data()
      })));
      this.pet2details = queryDocumentSnapshot.docs.map(doc=>({
        __id: doc.id, ...doc.data()
      }));

    });

    firebase.firestore().collection('pet3').where('email','==',this.crudService.getmail()).get().then((queryDocumentSnapshot)=>{
      this.c=true;
      console.log(queryDocumentSnapshot.docs.map(doc=>({
        __id: doc.id, ...doc.data()
      })));
      this.pet3details = queryDocumentSnapshot.docs.map(doc=>({
        __id: doc.id, ...doc.data()
      }));

    });



  }
  show(){
    this.d=true;
    
  }
  getpet(name,about,seekingfor,status,height,weight){

    console.log(this.crudService.getpetmail());
    firebase.firestore().collection("pet2").add(
      {
        email:this.crudService.getpetmail(),
        name:name,
        about:about,
        seekingfor:seekingfor,
        status:status,
        height:height,
        weight:weight,
      }).then(resp => {

        console.log(resp);

      })
}
fix(){
  this.router.navigateByUrl('/test')
}

}
