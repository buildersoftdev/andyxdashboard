import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataStorageRoutingModule } from './data-storage-routing.module';
import { DataStorageComponent } from './data-storage/data-storage.component';


@NgModule({
  declarations: [DataStorageComponent],
  imports: [
    CommonModule,
    DataStorageRoutingModule
  ]
})
export class DataStorageModule { }
