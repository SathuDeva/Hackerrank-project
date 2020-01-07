import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AddpetComponent } from './addpet/addpet.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  { path: '', component:LoginComponent},
  { path: 'login', component:LoginComponent},
  { path: 'addpet', component:AddpetComponent},
  {path:'home',  component:HomeComponent},
  {path:'signup',  component:SignupComponent},
  {path:'test',  component:TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,HomeComponent,SignupComponent,AddpetComponent,TestComponent]
