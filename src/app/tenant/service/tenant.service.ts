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

  getTenantDetails(): Observable<any> {
    return this.http.get(environment.apiUrl + '/dashboard/tenants/detail');
  }

}
