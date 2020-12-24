import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';
import { OrderFormComponent } from "./order-form.component";

@NgModule({
    declarations: [OrderFormComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
    ],
    exports:[OrderFormComponent],
    providers: [],
    bootstrap: []
  })

  export class OrderFormModule {
}