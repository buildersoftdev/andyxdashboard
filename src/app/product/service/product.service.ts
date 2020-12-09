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

  getProductDetails(tenantName: string): Observable<any> {
    return this.http.get(environment.apiUrl + `/dashboard/tenants/${tenantName}/products/detail`);
  }
}
