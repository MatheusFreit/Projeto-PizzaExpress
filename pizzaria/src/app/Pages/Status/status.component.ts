import { Component, OnInit } from '@angular/core';
import { pedidosService } from 'src/app/services/pedidos.service';
import { pizzaria } from 'src/app/models/pizzaria';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})

export class StatusComponent implements OnInit {
  DadosPedidos?: pizzaria;

  pesquisaRealizada = true;
  idUsuario!: number ;
  
  constructor(private PedidoServices: pedidosService, private router:Router ){
    
  }
  
  ngOnInit(): void {
   this.realizarPesquisa();
   
  
  }


  //Atenção na data vindo do servidor
  realizarPesquisa(){
    if (this.idUsuario) {
      this.PedidoServices.GetPedido(this.idUsuario).subscribe((data:any) => {
        this.pesquisaRealizada = false;
        this.DadosPedidos = data[0];
        console.log(this.DadosPedidos); 
      });
    } else {
      console.warn('ID de pesquisa ausente ou inválido');
    }


  }


  getSituacaoLabel(): string {
    switch (this.DadosPedidos?.Situacao) {
      case 'Em producao':
        return 'Em produção';
      case 'Saindo para entrega':
        return 'Saindo para entrega';
      case 'Pedido finalizado':
        return 'Pedido finalizado';
      default:
        return 'Situação desconhecida';
    }
  }

  AtualizandoaPagina(){
    window.location.reload();
  }

}


