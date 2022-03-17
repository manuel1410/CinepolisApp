import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesAlimentosPageRoutingModule } from './detalles-alimentos-routing.module';

import { DetallesAlimentosPage } from './detalles-alimentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesAlimentosPageRoutingModule
  ],
  declarations: [DetallesAlimentosPage]
})
export class DetallesAlimentosPageModule {}
