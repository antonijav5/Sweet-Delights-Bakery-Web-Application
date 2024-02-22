import { Component } from '@angular/core';

@Component({
  selector: 'app-obavestenja',
  templateUrl: './obavestenja.component.html',
  styleUrls: ['./obavestenja.component.css']
})
export class ObavestenjaComponent {
type:string=""
users:any[]=[]
moje_narudzbine:{
  idOrder:number,
  idUser:number,
  items:{
    id:number,
    name: string,
    quantity:number,
    fullPrice: number
  }[],
  status:string
 }[]=[]
ngOnInit(){
  this.type=localStorage.getItem("type")||''
  this.moje_narudzbine=JSON.parse(localStorage.getItem("narudzbine")|| '{}')

  this.users=JSON.parse(localStorage.getItem("users")|| '{}')
  let username=localStorage.getItem("username")||''
  this.moje_narudzbine=this.moje_narudzbine.filter(a=>(a.idUser==this.users.find(a=>a.username==username).id) && a.status!='Čeka na odobrenje')
  this.moje_narudzbine.sort((a, b) =>  b.idOrder - a.idOrder )
  
}

getNaslovFormat(naslov:string){
  let lowerCaseString = naslov?.toLowerCase() || '';
  naslov=naslov?.charAt(0).toUpperCase() + lowerCaseString.slice(1);
  return naslov
}

removeOrder(id:number){
let svenarudzbine:any[]=JSON.parse(localStorage.getItem("narudzbine")|| '{}')
svenarudzbine=svenarudzbine.filter(a=>a.idOrder!=id)
localStorage.setItem("narudzbine", JSON.stringify(svenarudzbine))
this.moje_narudzbine=this.moje_narudzbine.filter(a=>a.idOrder!=id);
this.moje_narudzbine.sort((a, b) => b.idOrder - a.idOrder)
}

}
