import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';
@Component({
  selector: 'app-menupages',
  templateUrl: './menupages.component.html',
  styleUrls: ['./menupages.component.css']
})
export class MenupagesComponent {
 constructor(private param:ActivatedRoute, private service:OrderDetailsService){
 }
 getMenuId:any;
 menuData:any;

 ngOnInit():void{
  this.getMenuId = this.param.snapshot.paramMap.get('id');
  console.log(this.getMenuId,'getmenu');
  if(this.getMenuId)
  {
     this.menuData = this.service.foodDetail.filter((value) => {
      return value.id == this.getMenuId;
    });
    console.log('menuData:', this.menuData);
  }
  }
 }

// function value(value: { id: number; foodName: string; foodDetails: string; foodPrice: number; foodImg: string; }, index: number, array: { id: number; foodName: string; foodDetails: string; foodPrice: number; foodImg: string; }[]): value is { id: number; foodName: string; foodDetails: string; foodPrice: number; foodImg: string; } {
//   throw new Error('Function not implemented.');
// }

