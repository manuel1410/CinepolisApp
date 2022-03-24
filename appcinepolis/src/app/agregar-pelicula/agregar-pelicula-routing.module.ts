import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarPeliculaPage } from './agregar-pelicula.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarPeliculaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarPeliculaPageRoutingModule {}
