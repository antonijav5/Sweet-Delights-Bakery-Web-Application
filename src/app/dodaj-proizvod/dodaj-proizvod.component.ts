import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dodaj-proizvod',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dodaj-proizvod.component.html',
  styleUrl: './dodaj-proizvod.component.css'
})
export class DodajProizvodComponent {

  showDialog = false;
  src:string=""
  name:string=""
  opis:string=""
  cena:any
  sastav:string=""
  errorMsg:string=""
  proizvodi:any[]=[]
  typeSweet:string="torte"

ngOnInit(){
  this.proizvodi=JSON.parse(localStorage.getItem("proizvodi")|| '{}')
}

  openDialog() {
    this.showDialog = true;
  }

  closeDialog() {
    this.showDialog = false;
  }

setSrc(src:string){
  document.getElementById("slikaProizvoda")?.setAttribute("src", src)
  this.src=src
  this.closeDialog()
}

addItem(){

  if (this.src=="") {
    this.errorMsg="Unesite sliku proizvoda!"
    return
  }

  if (this.name=="") {
    this.errorMsg="Unesite naziv proizvoda!"
    return
  }

  if (this.opis=="") {
    this.errorMsg="Unesite opis proizvoda!"
    return
  }
  if (this.cena==undefined) {
    this.errorMsg="Unesite cenu proizvoda!"
    return
  }
  if (this.sastav=="") {
    this.errorMsg="Unesite sastav proizvoda!"
    return
  }
  let sastavLista:any[]=[]
  sastavLista.push(this.sastav)
let proizvod={
  id: this.proizvodi.length+1,
  naslov:this.name.toUpperCase(),
  src:this.src,
  tip:this.typeSweet,
  cena:parseInt(this.cena),
  sastav:this.sastav.indexOf(",")!=-1?this.sastav.split(","):sastavLista,
  opis:this.opis,
  komentari:[]
}
this.proizvodi.push(proizvod)
localStorage.setItem("proizvodi", JSON.stringify(this.proizvodi))
this.errorMsg=""
this.openDialogDodavanje()
}


openDialogDodavanje() {
  let dialog = document.getElementById('customDialogDodavanje')|| new HTMLElement()
        dialog.style.display = 'block';
        document.body.classList.add('overlay');
        setTimeout(() => {
          this.closeDialogDodavanje()
        }, 5000);
}

closeDialogDodavanje() {
  let dialog = document.getElementById('customDialogDodavanje')|| new HTMLElement()
        dialog.style.display = 'none';
        document.body.classList.remove('overlay');
}

}
