import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Order } from '../interfaces/order.interface';
import { DayTime } from '../enums/dayTime.enum';
import { DishType } from '../enums/dishType.enum';
import { OutputOrder } from '../interfaces/outputOrder.interface';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-order-grid',
  templateUrl: './order-grid.component.html',
  styleUrls: ['./order-grid.component.css']
})
export class OrderGridComponent implements OnInit {

  Daytime = DayTime;
  DishType = DishType;  
  ListOfOrder: Array<OutputOrder> = [];
  ListOfOrders: Array<OutputOrder> =  JSON.parse(localStorage.getItem('listOrder'));

  constructor() { }  

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    console.log(this.ListOfOrder);
    console.log(this.ListOfOrders);
  }

  displayedColumns: string[] = ['position', 'value'];
  dataSource = new MatTableDataSource<OutputOrder>(this.ListOfOrders);


}
