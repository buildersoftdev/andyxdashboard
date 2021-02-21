import {Component, OnInit} from '@angular/core';
import {TenantService} from '../service/tenant.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.scss']
})
export class TenantComponent implements OnInit {
  tenants: Array<string> = [];
  tenantsDetails: Array<any> = [];

  constructor(private tenantService: TenantService,
              private router: Router,
              private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.getTenants();
  }

  getTenants(): void {
    this.tenantService.getAllTenants().subscribe(
      tenants => {
        this.tenants = tenants;
        if (this.route.snapshot.paramMap.get('tenantName') === null) {
          this.getTenantsDetails(this.tenants[0]);
        } else {
          // @ts-ignore
          this.getTenantsDetails(this.route.snapshot.paramMap.get('tenantName'));
        }
      },
      error => console.log(error)
    );
  }

  getTenantsDetails(tenantName: string): void {
    this.router.navigate([`tenant/${tenantName}`]);
    this.tenantService.getTenantDetails(tenantName).subscribe(
      tenantsDetails => this.tenantsDetails = tenantsDetails,
      error => console.log(error)
    );
  }
}
