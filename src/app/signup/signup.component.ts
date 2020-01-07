import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private crudService: CrudService,private router:Router) { }

  ngOnInit() {
  }
  signup(email,password,fname,phonenumber,bio,address){
    this.crudService.onsignup(email, password,fname,phonenumber,bio,address).then(resp => {

      console.log("resfsp");
        alert("Account Created")
      console.log(resp);



    })
      .catch(error => {
        console.log(error);
      });

}






}
