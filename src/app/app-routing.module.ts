import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ONamaComponent } from './o-nama/o-nama.component';
import { PoslasticeComponent } from './poslastice/poslastice.component';
import { PromocijeComponent } from './promocije/promocije.component';
import { MojiPodaciComponent } from './moji-podaci/moji-podaci.component';
import { MojaKorpaComponent } from './moja-korpa/moja-korpa.component';
import { ObavestenjaComponent } from './obavestenja/obavestenja.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'o-nama', component: ONamaComponent },
  { path: 'poslastice', component: PoslasticeComponent },
  { path: 'promocije', component: PromocijeComponent },
  { path: 'moji-podaci', component: MojiPodaciComponent },
  { path: 'moja-korpa', component: MojaKorpaComponent },
  { path: 'obavestenja', component: ObavestenjaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
