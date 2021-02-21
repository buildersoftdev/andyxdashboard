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

  products: Array<string> = [];
  productsDetails: Array<any> = [];

  components: Array<string> = [];
  componentsDetails: Array<any> = [];

  books: Array<string> = [];
  booksDetails: Array<any> = [];

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


  getProducts(tenantName: string): void {
    this.tenantService.getProducts(tenantName).subscribe(
      products => this.products = products,
      error => console.log(error)
    );
  }

  getProductsDetails(tenantName: string, productName: string): void {
    this.tenantService.getProductDetails(tenantName, productName).subscribe(
      productsDetails => this.productsDetails = productsDetails,
      error => console.log(error)
    );
  }

  getComponents(tenantName: string, productName: string): void {
    this.tenantService.getComponents(tenantName, productName).subscribe(
      components => this.components = components,
      error => console.log(error)
    );
  }

  getComponentsDetails(tenantName: string, productName: string, componentName: string): void {
    this.tenantService.getComponentDetails(tenantName, productName, componentName).subscribe(
      compDetails => this.componentsDetails = compDetails,
      error => console.log(error)
    );
  }

  getBooks(tenantName: string, productName: string, componentName: string) {
    this.tenantService.getBooks(tenantName, productName, componentName).subscribe(
      books => this.books = books,
      error => console.log(error)
    );
  }

  getBooksDetails(tenantName: string, productName: string, componentName: string, bookName: string) {
    this.tenantService.getBookDetails(tenantName, productName, componentName, bookName).subscribe(
      booksDetails => this.booksDetails = booksDetails,
      error => console.log(error)
    );
  }
}
