import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuienesSomosComponent } from './modules/landing/quienes-somos/quienes-somos.component';
import { ContactoComponent } from './modules/contacto/contacto.component';
import { HomeResturantsComponent } from './modules/user/home-resturants/home-resturants.component';

const routes: Routes = [
  {
    path: '',
    component: QuienesSomosComponent,
  },
  { path: 'home', component: QuienesSomosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'restaurante', component: HomeResturantsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
