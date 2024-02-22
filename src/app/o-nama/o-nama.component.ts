import { Component, ElementRef, ViewChild } from '@angular/core';
import * as L from 'leaflet';


@Component({
  selector: 'app-o-nama',
  templateUrl: './o-nama.component.html',
  styleUrls: ['./o-nama.component.css']
})
export class ONamaComponent {
@ViewChild('map', { static: true }) mapElement!: ElementRef;
type:string=""
ngOnInit(){
  this.type=localStorage.getItem("type")||''
  const map = L.map(this.mapElement.nativeElement).setView([44.8177777778, 20.4569444444], 30);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
}

}
