import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-narudzbine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './narudzbine.component.html',
  styleUrl: './narudzbine.component.css'
})
export class NarudzbineComponent {
ngOnInit(){
this.proizvodi=JSON.parse(localStorage.getItem("proizvodi")|| '{}')
this.narudzbine=JSON.parse(localStorage.getItem("narudzbine")|| '{}')
 this.narudzbine.sort((a, b) =>  b.idOrder - a.idOrder )

}

totalPrice:number=0
 narudzbine:{
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
   proizvodi: { id: number, naslov: string, src: string, 
    tip?: string,
    cena?: number,
    sastav?: string[],
    opis?: string,
    komentari?: { id: number, comment: string }[] }[] = []

item:any;
cnt:number=0
getPic(id:number){
  return this.proizvodi.find(a=>a.id==id)?.src
  }

  getNaslovFormat(naslov:string){
    let lowerCaseString = naslov?.toLowerCase() || '';
    naslov=naslov?.charAt(0).toUpperCase() + lowerCaseString.slice(1);
    return naslov
  }

  getPrice(id:number){
let price:number=0
let items:any[]=this.narudzbine.find(a=>a.idOrder==id)?.items || []
items.forEach(element => {
  price+=element.fullPrice
});
return price  
}


decrementCounter(){
  this.cnt--
  }
  
  incrementCounter(){
    this.cnt++
  }

  approveOrder(id:number){
this.narudzbine[this.narudzbine.findIndex(a=>a.idOrder==id)].status="Odobrena"
localStorage.setItem("narudzbine", JSON.stringify(this.narudzbine))
  }

  declineOrder(id:number){
    this.narudzbine[this.narudzbine.findIndex(a=>a.idOrder==id)].status="Odbijena"
    localStorage.setItem("narudzbine", JSON.stringify(this.narudzbine))
  }
}
