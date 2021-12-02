import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const API_URL = 'http://localhost:8888/PRODUCT-SERVICE/';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this.http.get(API_URL + 'products');
  }

  getOneProduct(id: number): Observable<any> {
    return this.http.get(API_URL + 'products/' + id);
  }
}
