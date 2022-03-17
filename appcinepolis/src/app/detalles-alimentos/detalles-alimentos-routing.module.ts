import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesAlimentosPage } from './detalles-alimentos.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesAlimentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesAlimentosPageRoutingModule {}
