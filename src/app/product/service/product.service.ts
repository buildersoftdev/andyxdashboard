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

  getProductDetails(tenantName: string, productName: string): Observable<any> {
    return this.http.get(environment.apiUrl + `/dashboard/tenants/${tenantName}/products/${productName}`);
  }

  getComponents(tenantName: string, productName: string): Observable<any> {
    return this.http.get(environment.apiUrl + `/dashboard/tenants/${tenantName}/products/${productName}/components`);
  }

  getComponentDetails(tenantName: string, productName: string, componentName: string): Observable<any> {
    return this.http.get(environment.apiUrl + `/dashboard/tenants/${tenantName}/products/${productName}/components/${componentName}`);
  }

  getBooks(tenantName: string, productName: string, componentName: string): Observable<any> {
    return this.http.get(environment.apiUrl+ `/dashboard/tenants/${tenantName}/products/${productName}/components/${componentName}/books`);
  }

  getBookDetails(tenantName: string, productName: string, componentName: string, bookName: string): Observable<any> {
    return this.http.get(environment.apiUrl+ `/dashboard/tenants/${tenantName}/products/${productName}/components/${componentName}/books/${bookName}`);
  }
}
