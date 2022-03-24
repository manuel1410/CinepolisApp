import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarDetallesPeliculaPage } from './modificar-detalles-pelicula.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarDetallesPeliculaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarDetallesPeliculaPageRoutingModule {}
