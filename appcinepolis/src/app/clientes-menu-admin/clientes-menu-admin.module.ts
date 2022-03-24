import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesMenuAdminPageRoutingModule } from './clientes-menu-admin-routing.module';

import { ClientesMenuAdminPage } from './clientes-menu-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientesMenuAdminPageRoutingModule
  ],
  declarations: [ClientesMenuAdminPage]
})
export class ClientesMenuAdminPageModule {}
