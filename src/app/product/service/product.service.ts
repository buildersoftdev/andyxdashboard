import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(tenantName: string): Observable<any> {
    return this.http.get(environment.apiUrl + `/dashboard/tenants/${tenantName}/products`);
  }

  getProductsDetails(tenantName: string): Observable<any> {
    return this.http.get(environment.apiUrl + `/dashboard/tenants/${tenantName}/products/detail`);
  }

  getComponents(tenantName: string, productName: string): Observable<any> {
    return this.http.get(environment.apiUrl + `/dashboard/tenants/${tenantName}/products/${productName}/components`);
  }

  getComponentsDetails(tenantName: string, productName: string): Observable<any> {
    return this.http.get(environment.apiUrl + `/dashboard/tenants/${tenantName}/products/${productName}/components/detail`);
  }

  getBooks(tenantName: string, productName: string, componentName: string): Observable<any> {
    return this.http.get(environment.apiUrl+ `/dashboard/tenants/${tenantName}/products/${productName}/components/${componentName}/books`);
  }

  getBooksDetails(tenantName: string, productName: string, componentName: string): Observable<any> {
    return this.http.get(environment.apiUrl+ `/dashboard/tenants/${tenantName}/products/${productName}/components/${componentName}/books/detail`);
  }
}
