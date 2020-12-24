import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Order } from '../interfaces/order.interface';
import { Post } from '../interfaces/post.interface';
import { OutputOrder } from '../interfaces/outputOrder.interface';

var httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})};

@Injectable({ providedIn: 'root' })

export class OrdersService {

    private ordersApiUrl = 'https://localhost:44363/api/orders';    

    constructor(
        private http: HttpClient,
        private messageService: MessageService) { }

    sendOrders(Post: Post){
        return this.http.post<OutputOrder>(this.ordersApiUrl, Post, httpOptions).pipe(
            retry(2),
            catchError(this.handleError)
          );
    }

    getOrders(Order) {
        return this.http.get(this.ordersApiUrl, Order);
    }

    handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // Erro ocorreu no lado do client
          errorMessage = error.error.message;
        } else {
          // Erro ocorreu no lado do servidor
          errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
      };

}