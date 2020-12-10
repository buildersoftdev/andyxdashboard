import {Component, OnInit} from '@angular/core';
import {TenantService} from '../service/tenant.service';

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.scss']
})
export class TenantComponent implements OnInit {
  tenants: Array<string> = [];
  tenantsDetails: Array<any> = [];

  constructor(private tenantService: TenantService) {
  }

  ngOnInit(): void {
    this.getTenants();
    this.getTenantsDetails("buildersoft");
  }

  getTenants(): void {
    this.tenantService.getAllTenants().subscribe(
      tenants => this.tenants = tenants,
      error => console.log(error)
    );
  }

  getTenantsDetails(tenantName: string): void {
    this.tenantService.getTenantDetails(tenantName).subscribe(
      tenantsDetails => this.tenantsDetails = tenantsDetails,
      error => console.log(error)
    );
  }
}
