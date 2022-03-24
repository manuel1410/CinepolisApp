import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainmenuAdminPage } from './mainmenu-admin.page';

const routes: Routes = [
  {
    path: '',
    component: MainmenuAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainmenuAdminPageRoutingModule {}
