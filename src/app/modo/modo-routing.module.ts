import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModoPage } from './modo.page';

const routes: Routes = [
  {
    path: '',
    component: ModoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModoPageRoutingModule {}
