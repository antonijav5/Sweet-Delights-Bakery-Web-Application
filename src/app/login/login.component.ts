import { Component, Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Injectable({providedIn: 'root'})
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


constructor(private router: Router){};
username=""
password =""
usernameError=""
passForEveryUser="123"
customers=["mina", "djole", "petar", "misa"] 
employee=["dejan", "jovana", "ana"]
error=""
ngOnInit(){

}

signIn(){
if (this.username=="" || this.username==null){
  this.error="Unesite korisničko ime. "
  return
}
if (this.password=="" || this.password==null){
  this.error="Unesite lozinku. "
  return
}
if (this.customers.find(a=>a=this.username))
{
  if (this.password=this.passForEveryUser)
  {
localStorage.setItem("type", "customer")
this.router.navigate(['/promocije'])
}
  else {
  this.error="Pogrešna lozinka. "
  return
}
}
else if (this.employee.find(a=>a=this.username))
{ 
  if (this.password=this.passForEveryUser)
localStorage.setItem("type", "employee")
else {
  this.error="Pogrešna lozinka. "
  return
}
}
else {
  this.error="Ne postoji korisnik sa datim korisničkim imenom."
  return
}
this.error=""
localStorage.setItem("username", this.username)
}
}
