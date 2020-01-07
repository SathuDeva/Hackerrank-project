import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  imageurl: string ;
  documents: any[];
  names: any[];
  images = [1, 2, 3];
  flag = false;
  image: any;
  image2: any;
  i = 0;
  constructor(private crudService: CrudService) { }

  ngOnInit() {
    firebase.firestore().collection('owner').where('isavailable', '==', 'yes' ).get().then((queryDocumentSnapshot) => {
      this.documents = queryDocumentSnapshot.docs;
      console.log(this.crudService.getpetmail());
      console.log(queryDocumentSnapshot.docs.map(doc => ({
        __id: doc.id , ...doc.data()
      })));
      this.names = queryDocumentSnapshot.docs.map(doc => ({
        __id: doc.id , ...doc.data()}));
      console.log(this.names[0].url);
      this.images[0] = this.names[0].url;
      this.images[1] = this.names[1].url;
      this.images[2] = this.names[2].url;
      this.images[3] = this.names[3].url;
      this.images[4] = this.names[4].url;
      this.image = this.images[this.i];
      this.image2 = this.images[this.i];
    }).catch((err) => {
      console.log(err);
    } );

  }

  enter() {
    this.flag = true;
  }

  inc() {
    if (this.i === 4) {
      this.i = 0;
    } else {
      this.i = this.i + 1;
    }
    this.image = this.images[this.i];
    this.image2 = this.images[(this.i + 3) % this.images.length];
    this.flag = false;
    console.log(this.i);
  }

  dec() {
    if (this.i === 0) {
      this.i = 4;
    } else {
      this.i = this.i - 1;
    }
    this.image = this.images[this.i];
    this.image2 = this.images[(this.i + 3) % this.images.length];
    this.flag = false;
  }
}
