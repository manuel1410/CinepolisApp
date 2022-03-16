import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlimentosMenuPageRoutingModule } from './alimentos-menu-routing.module';

import { AlimentosMenuPage } from './alimentos-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlimentosMenuPageRoutingModule
  ],
  declarations: [AlimentosMenuPage]
})
export class AlimentosMenuPageModule {}
