import { Component } from '@angular/core';
// import services

import { OrderDetailsService } from 'src/app/services/order-details.service';
OrderDetailsService
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private Service: OrderDetailsService) {}
 foodData:any;
  ngOnInit(): void {
    this.foodData = this.Service.foodDetail;
  }
}
