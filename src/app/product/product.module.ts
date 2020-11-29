import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product/product.component';
import {SharedModule} from '../@shared/shared.module';


@NgModule({
  declarations: [ProductComponent],
    imports: [
        CommonModule,
        ProductRoutingModule,
        SharedModule
    ]
})
export class ProductModule { }
