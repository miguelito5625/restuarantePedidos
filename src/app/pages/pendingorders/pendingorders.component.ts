import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdersService } from 'src/app/services/orders.service';

interface Order {
  id: string;
  total: number;
  direccion: string;
  platillos: any[];
}

@Component({
  selector: 'app-pendingorders',
  templateUrl: './pendingorders.component.html',
  styleUrls: ['./pendingorders.component.css']
})
export class PendingordersComponent implements OnInit {

  orders: Observable<any[]>;
  allOrder:Order[] = [];

  constructor(
    private ordersService: OrdersService
  ){

  }

  ngOnInit() {
    // this.orders = this.ordersService.getAll();
    this.ordersService.getAll().subscribe((orders) => {
      this.allOrder = [];
      orders.forEach((order) => {
        console.log(order);
        this.allOrder.push(order);
      });
    });

  }

  async getAllOrders(){
    this.orders = await this.ordersService.getAll();
    console.log(this.orders);
    
  }
}
