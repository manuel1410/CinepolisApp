import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarPeliculaPageRoutingModule } from './agregar-pelicula-routing.module';

import { AgregarPeliculaPage } from './agregar-pelicula.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarPeliculaPageRoutingModule
  ],
  declarations: [AgregarPeliculaPage]
})
export class AgregarPeliculaPageModule {}
