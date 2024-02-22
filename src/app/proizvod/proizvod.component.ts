import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-proizvod',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './proizvod.component.html',
  styleUrl: './proizvod.component.css'
})
export class ProizvodComponent {

constructor(private route:ActivatedRoute, private router:Router){};

ngOnInit (){
  this.id=this.route.snapshot.params['id'];
  this.users=JSON.parse(localStorage.getItem("users")|| '{}')
this.proizvodi=JSON.parse(localStorage.getItem("proizvodi")|| '{}')
this.type=localStorage.getItem("type")||''
  this.currentProizvod=this.proizvodi.find(a=>a.id==this.id)
  
  const objDiv = document.getElementById("scroll");
  
  if (objDiv != null) { 
    
    objDiv.scrollTop = objDiv.scrollHeight;
  }
}
id:number=-1
komentar:string=""
currentProizvod:any;
users:any[]=[]
error=""
type:string=""

 proizvodi: { id: number, naslov: string, src: string, 
  tip?: string,
  cena?: number,
  sastav?: string[],
  opis?: string,
  komentari?: { id: number, comment: string }[] }[] = []
getUserPic(id:number){
return this.users.find(a=>a.id==id).pic
}

getUsername(id:number){
  return this.users.find(a=>a.id==id).username
  }

  sendComment(){
    const inputField = document.getElementById("input");
    if (inputField !== null) {
    if (this.komentar == '') {
        inputField.style.border = '2px solid red';
        inputField.setAttribute('placeholder', 'Polje je obavezno.');
        return
    }
    else {
      const inputField = document.getElementById("input");
      if (inputField !== null) {
      
            inputField.style.border = 'none';
        
        
      }
    }
  }
    let proizvod=this.proizvodi.find(a=>a.id==this.id)
    let idUser=this.users.find(a=>a.username==localStorage.getItem("username")).id
   if (proizvod) {
    let obj = {
      id:idUser,
      comment:this.komentar
    }
    this.proizvodi.find(a=>a.id==this.id)?.komentari?.push(obj);
    localStorage.setItem("proizvodi",JSON.stringify(this.proizvodi));
   }
  }

   addToCart(){
    let korpa:any[]=[]
    korpa=JSON.parse(localStorage.getItem("korpa")|| '{}')
    
      let prev=korpa.findIndex(a=>a.id==this.id)
      if (prev!=-1) {
        korpa[prev].quantity++
      }
      else {
        let newItem={id:this.id, quantity:1}
        console.log(korpa);
        
        korpa.push(newItem)
      }
  
    
   localStorage.setItem("korpa", JSON.stringify(korpa))
   this.router.navigate(['/moja-korpa'])
    
   }


}
