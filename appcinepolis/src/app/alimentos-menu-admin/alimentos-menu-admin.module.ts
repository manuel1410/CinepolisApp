import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlimentosMenuAdminPageRoutingModule } from './alimentos-menu-admin-routing.module';

import { AlimentosMenuAdminPage } from './alimentos-menu-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlimentosMenuAdminPageRoutingModule
  ],
  declarations: [AlimentosMenuAdminPage]
})
export class AlimentosMenuAdminPageModule {}
