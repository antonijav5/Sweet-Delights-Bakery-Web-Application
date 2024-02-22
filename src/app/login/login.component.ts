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
proizvodi: { id: number, naslov: string, src: string, 
  tip?: string,
  cena?: number,
  sastav?: string[],
  opis?: string,
  komentari?: { id: number, comment: string }[] }[] = [
  
  { id: 1, naslov: "ČOKO TORTA", src: "../assets/img/torte/COKO.png",
  tip:"torte",
  cena: 4000,
  sastav: ["Čokoladni biskvit", "Krema od čokolade", "Ganache preliv","Čokoladne mrvice ili čokoladni šlag (za dekoraciju)"],
  opis: "Čoko torta je ukusna poslastica koja će oduševiti ljubitelje čokolade.  Ova sočna torta sastoji se od više slojeva čokoladnog biskvita natopljenog kremom od čokolade, a svaki sloj je obilno premazan kremom od čokolade ili ganache prelivom. Dekorisana čokoladnim mrvicama ili čokoladnim šlagom, ova torta pruža neodoljivu kombinaciju slatkoće i bogatog ukusa čokolade.",
  komentari: [
    { id: 1 ,comment: "Veoma ukusno!" },
    { id: 2, comment: "Ja sam oduševljena!" }
  ]
},
  { id: 2, naslov: "HAVANA TORTA", src: "../assets/img/torte/HAVANA_POSNA.png",
  tip:"torte",
  cena: 4400,
  sastav: ["Mekani biskvit natopljen aromatičnim sirupom", " Krema od vanile ili ruma ", "Prženi orasi ili bademi za dekoraciju"],
  opis: "Havana torta je raskošna poslastica koja oduševljava svojim bogatim ukusom i aromom. Ova torta se sastoji od više slojeva mekanog biskvita natopljenog aromatičnim sirupom, između kojih se nalaze slojevi kreme od vanile ili ruma. Obično je dekorisana prženim orasima ili bademima, dodajući dodatnu hrskavost i teksturu. Havana torta je idealna za one koji vole kremaste i aromatične poslastice.",
  komentari: [
    { id: 1, comment: "Wow."}
  ] },

  { id: 3, naslov: "KAPRI TORTA", src: "../assets/img/torte/KAPRI.png",
  tip:"torte",
  cena: 4100,
  sastav: ["Vazdušasti biskvit natopljen sokom od voća ", "Voćni fil ili krema ", " Sveže voće (npr. jagode, maline, ananas) za dekoraciju"],
  opis: "Kapri torta je osvežavajuća voćna poslastica koja se ističe svojim laganim ukusom i slojevima voća. Ova torta se obično pravi od više slojeva vazdušastog biskvita natopljenog sokom od voća, između kojih se nalazi mešavina voćnog fila ili kreme. Dekorisana svežim komadićima voća poput jagoda, malina, ili ananasa, Kapri torta pruža ukusnu i osvežavajuću poslasticu idealnu za letnje dane. ",
  komentari: [
    { id: 1,  comment: "Veoma ukusno! I povoljno." },
    { id: 2, comment: "Nema bolje!" }
  ] },

  { id: 4, naslov: "NUGAT TORTA", src: "../assets/img/torte/NUGAT.png",
   tip:"torte",
  cena: 4200,
  sastav: ["Mekani biskvit ili kora", "Krema od nugata i mlečne čokolade", "Lešnici ili bademi (za dekoraciju)"],
  opis: "Nugat torta je delikatna poslastica koja spaja nežnu strukturu i slatki ukus nugata. Ova torta se sastoji od slojeva mekanog biskvita ili kore, međusloja koji sadrže kremu od nugata i mlečne čokolade, te je obično ukrašena komadićima lešnika ili badema. Svojom kombinacijom kremastog i blago orašastog ukusa, nugat torta je idealna za one koji vole nešto manje slatke, ali prefinjene poslastice.",
  komentari: [
    { id: 3, comment: "Fantazija!" }
  ] },

  { id: 5, naslov: "MALINA LEŠNIK TORTA", src: "../assets/img/torte/MALINA_LESNIK.png",
  tip:"torte",
  cena: 4400,
  sastav: ["Biskvit obogaćen lešnicima: Sočan biskvit obogaćen mlevenim lešnicima", "Kremasti sloj od lešnika", "Maline "," Mleveni ili seckani lešnici za dekoraciju i dodatni ukus."],
  opis: "Malina Lešnik Torta predstavlja spoj sočnog biskvita obogaćenog ukusom lešnika, slojeva kremaste punjenja od lešnika i osvežavajućih nota malina. Ova torta pruža savršen balans između slatkog i kiselkastog, spajajući toplinu orašastih tonova sa svežinom voća. Dekorisana svežim malinama i lešnicima, ova torta zadovoljava sva čula svojom kombinacijom ukusa.",
  komentari: [
    { id: 1, comment: "Wow." }
  ] },

  { id: 6, naslov: "MOCART TORTA", src: "../assets/img/torte/MOCART.png",
  tip:"torte",
  cena: 4100,
  sastav: ["Vazdušasti biskvit natopljen sokom od voća", "Krem od vanile ", "Bela čokolada za dekoraciju "],
  opis: "Mocart Torta je eleganta poslastica koja kombinuje slojeve čokoladnog biskvita, kremastih punjenja od lešnika ili oraha, te bogatim slojem čokoladne glazure. Ova torta očarava svojom kompleksnošću ukusa, spajajući slatke, orašaste i čokoladne arome u savršenom balansu. Dekorisana čokoladnim listićima ili orašastim komadićima, Mocart Torta je sinonim za luksuz i rafiniran ukus.",
  komentari: [
    { id: 1, comment: "Veoma ukusno! I povoljno." },
    { id: 2, comment: "Nema bolje." }
  ] },

  { id: 7, naslov: "ČOKO VIŠNJA CAKE", src: "../assets/img/kolaci/coko_visnja_cake.png",
  tip:"kolaci",
  cena: 320,
  sastav: ["Čokoladna biskvitna podloga", "Krem od čokolade", "Višnje ili kompot od višanja za filovanje ili dekoraciju "],
  opis: "Čoko Višnja Cake je kolač koji spaja intenzivni ukus čokolade s osvežavajućim notama višnje. Ovaj kolač se sastoji od čokoladne biskvitne podloge koja je obogaćena kremom od čokolade, a slojevi se obično filuju višnjama ili kompotom od višanja. Kombinacija čokolade i višanja pruža jedinstvenu slatko-kiselkastu harmoniju koja osvaja nepce svakog gurmana.",
  komentari: [
    { id: 1, comment: "Neverovatan kolač!" },
    { id: 2, comment: "Ima i boljih, ali nije loše." }
  ] },

  { id: 8, naslov: "KARAMEL TARTUFO", src: "../assets/img/kolaci/karamel_tartufo.png",
  tip:"kolaci",
  cena: 310,
  sastav: ["Biskvitna podloga s dodatkom borovnice", "Krem od karamele", "Karamel bombone za dekoraciju "],
  opis: "Karamel Tartufo je raskošna poslastica koja pleni svojim bogatim karameliziranim ukusom i mekanom teksturom. Ovaj kolač se ističe kremastim punjenjem od karamela, obavijenim hrskavim slojem čokolade ili kakao praha. Njegova jedinstvena kombinacija karameliziranih nota sa slatkoćom čokolade stvara savršenu harmoniju u svakom zalogaju.",
  komentari: [
    { id: 1, comment: "Ukusno." },
    { id: 3, comment: "Ne sviđa mi se." }
  ] },

  { id: 9, naslov: "BOROVNICA CAKE", src: "../assets/img/kolaci/borovnica_cake.png",
   tip:"kolaci",
  cena: 310,
  sastav: ["Biskvitna podloga s dodatkom borovnice ", "Krem od borovnice ", "Borovnice za dekoraciju"],
  opis: "Borovnica Cake je kolač koji se ističe svojom voćnom notom borovnice i jedinstvenim ukusom. Ovaj kolač se sastoji od biskvitne podloge obogaćene ukusom borovnice, dok se slojevi spajaju s kremom od borovnice. Dekorisana svežim borovnicama, ova poslastica pruža balans slatkoće i blage kiselkaste note karakteristične za borovnice.",
  komentari: [
    { id: 1, comment: "Ukusno." },
    { id: 3, comment: "Ne sviđa mi se." }
  ] },

  { id: 10, naslov: "LEŠNIK TARTUFO", src: "../assets/img/kolaci/lesnik_tartufo.png",
  tip:"kolaci",
  cena: 340,
  sastav: ["Hrskava podloga", "Kremasto punjenje od lešnika ", "Dekoracija od lešnika: Seckani ili mleveni lešnici za posipanje po vrhu kolača."],
  opis: "Lešnik tartufo je delikatan kolač koji osvaja kombinacijom bogatog ukusa lešnika i kremaste teksture. Ovaj kolač karakteriše slojevita struktura, gde se hrskava podloga sjedinjuje sa kremastim punjenjem od lešnika. Kao završni dodir, često je dekorisan sitno seckanim ili mlevenim lešnicima, dodajući teksturu i intenziviranje ukusa. ",
  komentari: [
    { id: 1, comment: "Ekstremno ukusno!" },
    { id: 2, comment: "Odlično!" }
  ] },

  { id: 11, naslov: "MALINA CAKE", src: "../assets/img/kolaci/malina_cake.png",
  tip:"kolaci",
  cena: 300,
  sastav: ["Biskvitna podloga", "Krem od maline", "Sveže maline za dekoraciju"],
  opis: "Malina Cake je kolač koji osvaja svojom harmonijom slatkoće i osvežavajućeg ukusa malina. Ovaj kolač se sastoji od mekanog biskvita koji se spaja s kremom od maline, stvarajući savršenu kombinaciju slatkih i kiselkastih nota. Dekorisana svežim malinama, ova poslastica oduševljava ljubitelje voćnih kolača svojom jednostavnošću i bogatstvom ukusa maline.",
  komentari: [
    { id: 1, comment: "Preukusno." },
    { id: 4, comment: "Mnogo slatko." }
  ] },

  { id: 12, naslov: "ANANAS BADEM CAKE", src: "../assets/img/kolaci/ananas_badem_cake.png",
   tip:"kolaci",
  cena: 340,
  sastav: ["Biskvitna podloga s ukusom ananasa", "Kremasti sloj s ananasom ili krem od ananasa", "Bademi za dekoraciju "],
  opis: "Ananas Badem Cake je kolač koji odiše osvežavajućim ukusom ananasa i aromatičnom notom badema. Biskvitna podloga ovog kolača obogaćena je aromom ananasa, dok se slojevi spajaju s kremastim slojem od ananasa ili kremom koja sadrži ananas. Kao finalni dodir, bademi se često koriste za dekoraciju, pružajući kolaču dodatnu hrskavost i bogatstvo ukusa.",
  komentari: [
    { id: 1, comment: "Ekstremno ukusno!" },
    { id: 2, comment: "Odlično." }
  ] }
];
users:any[]=[{id:1, username:'petar', pic:'../assets/img/users/petar.png',  name:'Petar', surname:'Petrović', contact: '+381600234455', address:'Knez Mihajlova 4' , password:'123'},
{id:2, username:'mina', pic:'../assets/img/users/mina.png', name:'Mina', surname:'Marković', contact: '+381600424455', address:'Knez Mihajlova 11' , password:'123'},
{id:3, username:'misa', pic:'../assets/img/users/misa.png',  name:'Miša', surname:'Matić', contact: '+381610234955', address:'Knez Mihajlova 21' , password:'123'},
{id:4, username:'djole', pic:'../assets/img/users/djole.jpg',  name:'Đorđe', surname:'Janković', contact: '+381630136455', address:'Knez Mihajlova 31' , password:'123'}
]

employees:any[]=[{id:1, username:'dejan',  name:'Dejan', surname:'Stevanović', contact: '+381600234455', address:'Knez Mihajlova 33' , password:'123'},
{id:2, username:'jovana',  name:'Jovana', surname:'Jovanović', contact: '+381601134415', address:'Knez Mihajlova 43' , password:'123'},
{id:3, username:'ana', name:'Ana', surname:'Savić', contact: '+381600233211', address:'Knez Mihajlova 41' , password:'123'},
]

narudzbine:any[]=[
  {
  idOrder:1,
  idUser:1,
  items:
  [{  
  id:6,
  name: "MOCART TORTA",
  quantity: 1,
  fullPrice: 4100
  },
  {
    id:1,
    name: "ČOKO TORTA",
    quantity:2,
    fullPrice: 8000
  }
],
status:"Čeka na odobrenje"
  },

{
  idOrder:2,
  idUser:1,
  items:
  [{  
  id:5,
  name: "MALINA LEŠNIK TORTA",
  quantity: 1,
  fullPrice: 4400
  }
],
status:"Odobrena"
  }  ,

  {
    idOrder:3,
    idUser:2,
    items:
    [
      {  
    id:7,
    name: "ČOKO VIŠNJA CAKE",
    quantity: 3,
    fullPrice: 960
    },
    {  
      id:9,
      name: "BOROVNICA CAKE",
      quantity: 2,
      fullPrice: 620
      }
  ],
  status:"Odbijena"
    },

    {
      idOrder:4,
      idUser:2,
      items:
      [
        {  
      id:7,
      name: "ČOKO VIŠNJA CAKE",
      quantity: 3,
      fullPrice: 960
      },
      {  
        id:9,
        name: "BOROVNICA CAKE",
        quantity: 2,
        fullPrice: 620
        },

        {  
          id:5,
          name: "MALINA LEŠNIK TORTA",
          quantity: 1,
          fullPrice: 4400
          },
          {  
            id:6,
            name: "MOCART TORTA",
            quantity: 1,
            fullPrice: 4100
            }

    ],
    status:"Čeka na odobrenje"
      },


]
ngOnInit(){
if (localStorage.getItem("username")) {
 localStorage.removeItem("username")
 localStorage.removeItem("type")
 if (localStorage.getItem("korpa")) {
  localStorage.setItem("korpa", JSON.stringify([]))
 }
}
else {
localStorage.setItem("proizvodi", JSON.stringify(this.proizvodi))
localStorage.setItem("users", JSON.stringify(this.users))
localStorage.setItem("korpa", JSON.stringify([]))
localStorage.setItem("narudzbine", JSON.stringify(this.narudzbine))
localStorage.setItem("employees", JSON.stringify(this.employees))
}
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
if (this.users.find(a=>a.username==this.username))
{
  
  if (this.password==this.passForEveryUser)
  {
localStorage.setItem("type", "customer")
}
  else {
  this.error="Pogrešna lozinka. "
  return
}
}
else if (this.employees.find(a=>a.username==this.username))
{ 
  if (this.password==this.passForEveryUser)
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

if (localStorage.getItem("type")=="customer") {
  this.router.navigate(['/promocije'])
}
else {
  this.router.navigate(['/narudzbine'])
}
}

}
