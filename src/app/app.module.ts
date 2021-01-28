import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main-components/header/header.component';

import { HomeResturantsComponent } from './modules/user/home-resturants/home-resturants.component';
import { FoooterComponent } from './main-components/foooter/foooter.component';
import { QuienesSomosComponent } from './modules/landing/quienes-somos/quienes-somos.component';
import { ContactoComponent } from './modules/contacto/contacto.component';
import { RestaurantService } from './services/restaurant.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeResturantsComponent,
    FoooterComponent,
    QuienesSomosComponent,
    ContactoComponent,
   

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule 
  ],
  providers: [RestaurantService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
