import { Component } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
menu: any|string;

  constructor(private Service: OrderDetailsService) {}
  foodData:any;
   ngOnInit(): void {
     this.foodData = this.Service.foodDetail;
   }

}
