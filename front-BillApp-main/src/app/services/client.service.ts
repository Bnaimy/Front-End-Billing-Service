import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const API_URL = 'http://localhost:8888/CUSTOMER-SERVICE/';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(private http: HttpClient) { }

  getAllClients(): Observable<any> {
    return this.http.get(API_URL + 'customers');
  }

  getOneClient(id: number): Observable<any> {
    return this.http.get(API_URL + 'customers/' + id);
  }
}
