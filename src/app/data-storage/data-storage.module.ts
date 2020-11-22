import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataStorageRoutingModule } from './data-storage-routing.module';
import { DataStorageComponent } from './data-storage/data-storage.component';
import {SharedModule} from '../@shared/shared.module';


@NgModule({
  declarations: [DataStorageComponent],
  imports: [
    CommonModule,
    DataStorageRoutingModule,
    SharedModule
  ]
})
export class DataStorageModule { }
