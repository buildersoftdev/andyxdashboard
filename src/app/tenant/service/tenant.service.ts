import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TenantService {

  constructor(private http: HttpClient) {
  }

  getAllTenants(): Observable<any> {
    return this.http.get(environment.apiUrl + '/dashboard/tenants');
  }

  getTenantDetails(tenantName: string): Observable<any> {
    return this.http.get(environment.apiUrl + `/dashboard/tenants/${tenantName}`);
  }

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
    return this.http.get(environment.apiUrl + `/dashboard/tenants/${tenantName}/products/${productName}/components/${componentName}/books`);
  }

  getBookDetails(tenantName: string, productName: string, componentName: string, bookName: string): Observable<any> {
    return this.http.get(environment.apiUrl + `/dashboard/tenants/${tenantName}/products/${productName}/components/${componentName}/books/${bookName}`);
  }

}
