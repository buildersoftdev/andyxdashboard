import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReaderRoutingModule } from './reader-routing.module';
import { ReaderComponent } from './reader/reader.component';
import {SharedModule} from '../@shared/shared.module';


@NgModule({
  declarations: [ReaderComponent],
  imports: [
    CommonModule,
    ReaderRoutingModule,
    SharedModule
  ]
})
export class ReaderModule { }
