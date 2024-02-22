import { Component } from '@angular/core';

@Component({
  selector: 'app-moja-korpa',
  templateUrl: './moja-korpa.component.html',
  styleUrls: ['./moja-korpa.component.css']
})
export class MojaKorpaComponent {

  ngOnInit(){
    this.users=JSON.parse(localStorage.getItem("users")|| '{}')
    this.proizvodi=JSON.parse(localStorage.getItem("proizvodi")|| '{}')
    this.korpa=JSON.parse(localStorage.getItem("korpa")|| '{}')
    this.type=localStorage.getItem("type")||''

    
    this.korpa.forEach(element => { 
      let naslov=this.proizvodi.find(a=>a.id==element.id)?.naslov
      
      let lowerCaseString = naslov?.toLowerCase() || '';
      naslov=naslov?.charAt(0).toUpperCase() + lowerCaseString.slice(1);
      let price=this.proizvodi.find(a=>a.id==element.id)?.cena || 0
      //
      let oneitem={
      id:element.id,
      name: naslov,
      quantity: element.quantity,
      fullPrice: element.quantity * price
      }
      this.myOrder.push(oneitem)
    });
   
    this.myOrder.forEach(element => {
      this.totalPrice+=element.fullPrice
    });
   
  }
  type:string=""
  totalPrice:number=0
  users:any[]=[]
  myOrder:any[]=[];
  korpa:any[]=[]
   proizvodi: { id: number, naslov: string, src: string, 
    tip?: string,
    cena?: number,
    sastav?: string[],
    opis?: string,
    komentari?: { id: number, comment: string }[] }[] = []


    getPic(id:number){
      return this.proizvodi.find(a=>a.id==id)?.src
      }


       openDialog() {
        let dialog = document.getElementById('customDialog')|| new HTMLElement()
        dialog.style.display = 'block';
        document.body.classList.add('overlay');
        setTimeout(() => {
          this.closeDialog()
        }, 5000);
      }
      
      // Function to close the dialog
       closeDialog() {
        let dialog = document.getElementById('customDialog')|| new HTMLElement()
        dialog.style.display = 'none';
        document.body.classList.remove('overlay');
      }

     increaseQuantity(id:number){
      let ind=this.myOrder.findIndex(a=>a.id==id);
      this.myOrder[ind].quantity++
      this.korpa[this.korpa.findIndex(a=>a.id==id)].quantity++
      localStorage.setItem("korpa", JSON.stringify(this.korpa))
let cena=this.proizvodi.find(a=>a.id==id)?.cena || 0
this.myOrder[ind].fullPrice=this.myOrder[ind].quantity*cena
this.totalPrice+=cena
     }


     decreaseQuantity(id:number){
       let ind=this.myOrder.findIndex(a=>a.id==id);
       this.myOrder[ind].quantity--
       this.korpa[this.korpa.findIndex(a=>a.id==id)].quantity--
       localStorage.setItem("korpa", JSON.stringify(this.korpa))
let cena=this.proizvodi.find(a=>a.id==id)?.cena || 0
this.myOrder[ind].fullPrice=this.myOrder[ind].quantity*cena
this.totalPrice-=cena
     }

submit() {
let narudzbine:any[]=JSON.parse(localStorage.getItem("narudzbine")||'{}')
let username=localStorage.getItem("username")||''
let idUser=this.users.find(a=>a.username==username).id
let items:any[]=[]
this.myOrder.forEach(element => {
  let old=element.name
element.name=element.name.toUpperCase()
items.push(element)
element.name=old
});
let moja_narudzbina=
  {
    idOrder: narudzbine.length+1,
    idUser:  idUser,
    items:   items,
    status: "Čeka na odobrenje"
    }
    
narudzbine.push(moja_narudzbina)
localStorage.setItem("narudzbine", JSON.stringify(narudzbine))    
}


deleteCart(){
  this.myOrder=[]
  localStorage.setItem("korpa", JSON.stringify([]))
}
    }
