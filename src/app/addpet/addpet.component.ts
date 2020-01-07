import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import  * as firebase from 'firebase';
import {Router} from '@angular/router';
@Component({
  selector: 'app-addpet',
  templateUrl: './addpet.component.html',
  styleUrls: ['./addpet.component.css']
})
export class AddpetComponent implements OnInit {

  constructor(private crudService: CrudService,private router:Router) { }

  ngOnInit() {
  }

  addpet(name,about,seekingfor,status){
    console.log(this.crudService.getpetmail());
    firebase.firestore().collection("pet").add(
      {
        email:this.crudService.getpetmail(),
        name:name,
        about:about,
        seekingfor:seekingfor,
        status:status,
      }).then(resp => {

        console.log(resp);
        this.router.navigateByUrl('/login')
      })
}
}
