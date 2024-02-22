import { Component } from '@angular/core';

@Component({
  selector: 'app-promocije',
  templateUrl: './promocije.component.html',
  styleUrls: ['./promocije.component.css']
})
export class PromocijeComponent {


  ngOnInit(){
    this.texts.push('"Malina Senzacija" - Slatki raj od malina! Isprobajte neodoljivu tortu od maline i lešnika, uključujući i trio fantastičnih kolača s jedinstvenim ukusima i kremastim slojevima, sve u jednoj nezaboravnoj promociji!')
    this.texts.push('Neodoljiva kombinacija čokolade i nugata! Otkrijte savršenstvo u obliku čoko torte i nugat torte. Uživajte u spoju bogate čokoladne slatkoće i kremastog nugata, pružajući vam nezaboravan doživljaj slatkog užitka')
    this.texts.push('Iskusite eksploziju voćnih ukusa! Svaki kolač je remek-delo slatke umetnosti, spajajući sočnost voća saromatičnim bademima,čineći svaki zalogaj savršenim užitkom. Nemojte da propustite ovu akciju!')
    //initial
    this.followuptext=this.texts[this.cnt%this.texts.length].toString()
    this.type=localStorage.getItem("type")||''
    if (this.texts.length > 0) {
      setInterval(this.changePromotions.bind(this), 4000);
    }
}
cnt:number=0
texts:string[]=[];
followuptext:string=""
items1:string[]=["Malina lešnik","Čoko torta", "Ananas badem cake"]
items2:string[]=["3 x Malina cake","Nugat torta","Borovnica cake"]
item3:string="Malina cake"
imgs1:string[]=["../assets/img/torte/MALINA_LESNIK.png","../assets/img/torte/COKO.png","../assets/img/kolaci/ananas_badem_cake.png" ]
imgs2:string[]=["../assets/img/proms/3xmalina.png","../assets/img/torte/NUGAT.png","../assets/img/kolaci/borovnica_cake.png"]
img3:string="../assets/img/kolaci/malina_cake.png"
headlines:string[]=["MALINA SENZACIJA","ČOKO-NUGAT UŽITAK","MOĆNI VOĆNI TRIO"]

type:string=""


changePromotions(){
this.cnt++
this.followuptext=this.texts[this.cnt%this.texts.length].toString()
}

getStyle(num:number) {
  return this.cnt % 3 !== 2
    ? num==1?{ 'height': '400px', 'width': '400px' }:{'height': '400px', 'width': '400px', 'margin-left': '20px'}
    :num==1? { 'height': '250px', 'width': '250px' }:{'height': '250px', 'width': '250px', 'margin-left': '20px'}
}

checkLeft(){
  if (this.cnt%3==2) {
return {'margin-left':'200px'}
  }
  else return {};
}
//position: relative; top: -290px" 
//position: relative; top: -285px"
//position: relative; top: -135px; left:129px"
}
