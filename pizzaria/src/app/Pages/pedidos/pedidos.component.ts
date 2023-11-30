import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { pizzaria } from 'src/app/models/pizzaria';
import {pedidosService} from "src/app/services/pedidos.service"; 

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent {

  btnTitulo:string  = "Vamos fazer o seu Pedido!!";

  constructor(private pedidosservices: pedidosService ,private router: Router){

  }
  CreatePedido(Pedido: pizzaria){
    this.pedidosservices.CreatePedido(Pedido).subscribe((data)=> {
      console.log(data)
      
    })
   }

}
