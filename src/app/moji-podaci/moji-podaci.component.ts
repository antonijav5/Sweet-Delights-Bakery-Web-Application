import { Component } from '@angular/core';

@Component({
  selector: 'app-moji-podaci',
  templateUrl: './moji-podaci.component.html',
  styleUrls: ['./moji-podaci.component.css']
})
export class MojiPodaciComponent {

  myData:any
  edit:boolean=false
  oldPass:string=""
  newPass:string=""
  againNewPass:string=""
  errorPass:string=""
  errorData:string=""
  dialogText=""
  lozinkaYes:boolean=false;
  type:string=""
  ngOnInit(){
    this.getData();
  }

  getData(){
    let users:any[]=[]
    users=JSON.parse(localStorage.getItem("users") || '')
    let employees:any[]=[]
    employees=JSON.parse(localStorage.getItem("employees") || '')
    let username=localStorage.getItem("username")
    
    this.type=localStorage.getItem("type")||''
    if (this.type=="customer") {
      this.myData=users.find(a=>a.username==username)
    }
    else {
      
      this.myData=employees.find(a=>a.username==username)
    }
    
  }

  setEditable(flag:boolean){
    if (flag){
    let polja = document.getElementsByClassName("podaci");
    this.edit=true
    for (let i = 0; i < polja.length; i++) {
      let element = polja[i] as HTMLInputElement;
      element.disabled = false;
      
    }

    }
    else {
      let polja = document.getElementsByClassName("podaci");
      this.edit=false
      for (let i = 0; i < polja.length; i++) {
        let element = polja[i] as HTMLInputElement;
        element.disabled = true;
        
      }
    }
  }

  changeData(flag:boolean) {
    if (flag) {
      if (this.myData.name==""){
        this.errorData="Polje za izmenu imena ne sme biti prazno."
        return;
      }
      if (this.myData.surname==""){
        this.errorData="Polje za izmenu prezimena ne sme biti prazno."
        return;
      }
      
      let users:any[]=[]
      let employees:any[]=[]
      let username=localStorage.getItem("username")
      if (this.type=="customer") {
        users=JSON.parse(localStorage.getItem("users") || '')
        users[users.findIndex(a=>a.username==username)]=this.myData;
        localStorage.setItem("users", JSON.stringify(users))
      }
      else {
        employees=JSON.parse(localStorage.getItem("employees") || '')
        employees[employees.findIndex(a=>a.username==username)]=this.myData;
        localStorage.setItem("employees", JSON.stringify(employees))
      }
      
      this.setEditable(false)
      this.errorData=""
      this.dialogText="Podaci uspešno izmenjeni."
      this.openDialog()
    }
    else {
this.getData()
this.setEditable(false)
    }
  }

  changePassword(){
    if (this.oldPass=="") {
      this.errorPass="Polje za unos trenutne lozinke ne sme biti prazno."
      return
      }
    if (this.newPass=="") {
      this.errorPass="Polje za unos nove lozinke ne sme biti prazno."
      return
      }
    if (this.againNewPass=="") {
     this.errorPass="Polje za unos ponovljene lozinke ne sme biti prazno."
      return
}

if (this.oldPass!=this.myData.password) {
  this.errorPass="Pogrešna trenutna lozinka."
  return
}
if (this.newPass!=this.againNewPass) {
  this.errorPass="Lozinke se ne poklapaju."
  return
}
let users:any[]=[]
let employees:any[]=[]
let username=localStorage.getItem("username")
this.myData.password=this.newPass
if (this.type=="customer") {
      users=JSON.parse(localStorage.getItem("users") || '')
      users[users.findIndex(a=>a.username==username)]=this.myData;
      localStorage.setItem("users", JSON.stringify(users))
}
else 
{
  employees=JSON.parse(localStorage.getItem("employees") || '')
  employees[employees.findIndex(a=>a.username==username)]=this.myData;
  localStorage.setItem("employees", JSON.stringify(employees))
}
      
     

this.errorPass=""
this.dialogText="Lozinka uspešno izmenjena."
this.openDialog()
  }


  openDialog() {
    let dialog = document.getElementById('customDialog')|| new HTMLElement()
    dialog.style.display = 'block';
    document.body.classList.add('overlay');
    setTimeout(() => {
      this.closeDialog()
      this.dialogText=""
    }, 5000);
  }
  
  // Function to close the dialog
   closeDialog() {
    let dialog = document.getElementById('customDialog')|| new HTMLElement()
    dialog.style.display = 'none';
    document.body.classList.remove('overlay');
  }
}
