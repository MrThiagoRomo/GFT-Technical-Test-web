import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { Order } from '../interfaces/order.interface';
import { OutputOrder } from '../interfaces/outputOrder.interface';
import { Post } from '../interfaces/post.interface';
import { OrderGridComponent } from '../order-grid/order-grid.component';
import { OrdersService } from '../services/orders.service'

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  text: string = '';
  order: Order = { dayTime: 0, items: [] };
  Post: Post = { value: '' };  
  ListOfOrder: Array<OutputOrder> = JSON.parse(localStorage.getItem('listOrder'));

  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
  }

  sendOrder(string) {
    this.Post.value = string;
    const localStorageItem = new Array<OutputOrder>();    
    this.ordersService.sendOrders(this.Post).subscribe(
      data => {
        if (!this.ListOfOrder) {
          this.ListOfOrder = []
        }
        this.ListOfOrder.push(data);
        localStorageItem.push(data);
        if (data) {
          localStorage.setItem('listOrder', JSON.stringify(this.ListOfOrder));
        }
        this.text = data.value.toString();
        console.log(data);
        console.log(localStorage.getItem('listOrder'));
      });
  }

}
