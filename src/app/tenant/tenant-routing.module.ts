import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TenantComponent} from './tenant/tenant.component';

const routes: Routes = [
  {
    path: ':tenantName',
    component: TenantComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantRoutingModule {
}
