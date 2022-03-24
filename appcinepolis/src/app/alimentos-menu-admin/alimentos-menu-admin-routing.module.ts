import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlimentosMenuAdminPage } from './alimentos-menu-admin.page';

const routes: Routes = [
  {
    path: '',
    component: AlimentosMenuAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlimentosMenuAdminPageRoutingModule {}
