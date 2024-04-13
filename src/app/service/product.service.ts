import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http'
import { Observable, catchError, delay, throwError } from 'rxjs';
import { IProduct } from '../models/product';
import { ErrorService } from './error.service';

@Injectable({providedIn: 'root'})
export class ProductService {
  constructor(
    private errorService: ErrorService,
    private http: HttpClient
  ) {  }

  getAllProduct(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/productss').pipe( 
      delay (2000),
      catchError(this.errorHandler.bind(this))
    )
  }
  
  private errorHandler (error: HttpErrorResponse) {
    this.errorService.handle(error.message); 
    return throwError (() => { error.message })
  }
}