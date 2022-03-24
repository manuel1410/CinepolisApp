import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesMenuAdminPage } from './clientes-menu-admin.page';

const routes: Routes = [
  {
    path: '',
    component: ClientesMenuAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesMenuAdminPageRoutingModule {}
