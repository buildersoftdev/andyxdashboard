import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantRoutingModule } from './tenant-routing.module';
import { TenantComponent } from './tenant/tenant.component';


@NgModule({
  declarations: [TenantComponent],
  imports: [
    CommonModule,
    TenantRoutingModule
  ]
})
export class TenantModule { }
