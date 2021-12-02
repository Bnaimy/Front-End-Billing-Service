import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const API_URL = 'http://localhost:8888/BILLING-SERVICE/';
@Injectable({
  providedIn: 'root'
})
export class BillService {
  constructor(private http: HttpClient) { }

  getAllBills(): Observable<any> {
    return this.http.get(API_URL + 'bills');
  }

  getOneBill(id: number): Observable<any> {
    return this.http.get(API_URL + 'fullBill/' + id);
  }
}
