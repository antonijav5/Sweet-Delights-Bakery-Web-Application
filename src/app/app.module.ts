import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PromocijeComponent } from './promocije/promocije.component';
import { PoslasticeComponent } from './poslastice/poslastice.component';
import { ONamaComponent } from './o-nama/o-nama.component';
import { MojaKorpaComponent } from './moja-korpa/moja-korpa.component';
import { MojiPodaciComponent } from './moji-podaci/moji-podaci.component';
import { ObavestenjaComponent } from './obavestenja/obavestenja.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PromocijeComponent,
    PoslasticeComponent,
    ONamaComponent,
    MojaKorpaComponent,
    MojiPodaciComponent,
    ObavestenjaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
