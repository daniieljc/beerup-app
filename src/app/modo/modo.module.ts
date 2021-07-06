import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModoPageRoutingModule } from './modo-routing.module';

import { ModoPage } from './modo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModoPageRoutingModule
  ],
  declarations: [ModoPage]
})
export class ModoPageModule {}
