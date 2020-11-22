import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DataStorageComponent} from './data-storage/data-storage.component';

const routes: Routes = [
  {
    path: '',
    component: DataStorageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataStorageRoutingModule { }
