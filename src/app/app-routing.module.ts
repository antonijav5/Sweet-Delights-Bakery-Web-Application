import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ONamaComponent } from './o-nama/o-nama.component';
import { PoslasticeComponent } from './poslastice/poslastice.component';
import { PromocijeComponent } from './promocije/promocije.component';
import { MojiPodaciComponent } from './moji-podaci/moji-podaci.component';
import { MojaKorpaComponent } from './moja-korpa/moja-korpa.component';
import { ObavestenjaComponent } from './obavestenja/obavestenja.component';
import { ProizvodComponent } from './proizvod/proizvod.component';
import { NarudzbineComponent } from './narudzbine/narudzbine.component';
import { DodajProizvodComponent } from './dodaj-proizvod/dodaj-proizvod.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'o-nama', component: ONamaComponent },
  { path: 'poslastice', component: PoslasticeComponent },
  { path: 'promocije', component: PromocijeComponent },
  { path: 'moji-podaci', component: MojiPodaciComponent },
  { path: 'moja-korpa', component: MojaKorpaComponent },
  { path: 'obavestenja', component: ObavestenjaComponent },
  { path: 'proizvod/:id', component: ProizvodComponent },
  { path: 'narudzbine', component: NarudzbineComponent },
  { path: 'dodaj-proizvod', component: DodajProizvodComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
