import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarAlimentoPage } from './agregar-alimento.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarAlimentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarAlimentoPageRoutingModule {}
