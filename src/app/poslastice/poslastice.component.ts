import { Component } from '@angular/core';

@Component({
  selector: 'app-poslastice',
  templateUrl: './poslastice.component.html',
  styleUrls: ['./poslastice.component.css']
})
export class PoslasticeComponent {
tipPoslastice:string="torte"

ngOnInit(){
  this.proizvodi=JSON.parse(localStorage.getItem("proizvodi")|| '{}')
  this.listaPrikazProizvoda=this.proizvodi.filter(a=>a.tip=="torte")
  this.type=localStorage.getItem("type")||''
}
proizvodi: { id: number, naslov: string, src: string, 
  tip?: string,
  cena?: number,
  sastav?: string[],
  opis?: string,
  komentari?: { id: number, comment: string }[] }[] = []
type:string=""

// listaZaPrikazNaslov:any[]=this.torteNaslov
// listaZaPrikazSlike:any[]=this.torteSlike
listaPrikazProizvoda:any[]=[]
cnt:number=0

changeSweets(event:any){
  this.cnt=0
  this.listaPrikazProizvoda=this.proizvodi.filter(a=>a.tip==this.tipPoslastice)
  
}

decrementCounter(){
this.cnt--
}

incrementCounter(){
  this.cnt++
  console.log(this.listaPrikazProizvoda);
  
}
}
