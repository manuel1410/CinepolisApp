import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlimentosMenuPage } from './alimentos-menu.page';

const routes: Routes = [
  {
    path: '',
    component: AlimentosMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlimentosMenuPageRoutingModule {}
