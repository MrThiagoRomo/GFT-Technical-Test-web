import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';
import { OrderGridComponent } from "./order-grid.component";

import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'

@NgModule({
    declarations: [OrderGridComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        MatTableModule,
        MatPaginatorModule,
    ],
    exports:[OrderGridComponent],
    providers: [],
    bootstrap: []
  })

  export class OrderGridModule {
}