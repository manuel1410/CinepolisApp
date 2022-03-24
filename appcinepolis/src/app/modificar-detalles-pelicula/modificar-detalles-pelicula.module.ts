import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarDetallesPeliculaPageRoutingModule } from './modificar-detalles-pelicula-routing.module';

import { ModificarDetallesPeliculaPage } from './modificar-detalles-pelicula.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarDetallesPeliculaPageRoutingModule
  ],
  declarations: [ModificarDetallesPeliculaPage]
})
export class ModificarDetallesPeliculaPageModule {}
