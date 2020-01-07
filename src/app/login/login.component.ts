import { Component, OnInit } from '@angular/core';
import  * as firebase from 'firebase';
import {Router} from '@angular/router';
import { CrudService } from '../crud.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private crudService: CrudService) { }
  error:string;
  check:boolean=false;
  ngOnInit() {
  }
  onlogin(email,password){
    this.crudService.login(email, password).then(resp => {

      console.log(resp);

    })
      .catch(error => {
        console.log(error);
        alert("Wrong password")
      });



}

}
