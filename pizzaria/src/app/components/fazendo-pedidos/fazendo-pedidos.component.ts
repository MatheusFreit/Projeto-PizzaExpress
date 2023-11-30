import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { pizzaria } from 'src/app/models/pizzaria';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, } from '@angular/material/snack-bar';
import { pedidosService } from 'src/app/services/pedidos.service';


@Component({
  selector: 'app-fazendo-pedidos',
  templateUrl: './fazendo-pedidos.component.html',
  styleUrls: ['./fazendo-pedidos.component.css']
})
export class FazendoPedidosComponent implements OnInit {
   @Input() dadosdoPedidos: pizzaria| null= null;  
   @Input() btnTitulo!: string; 
   @Output () onSumbit = new EventEmitter<pizzaria>();
   PedidosForm!: FormGroup ;
   horizontalPosition: MatSnackBarHorizontalPosition = 'center';
   verticalPosition: MatSnackBarVerticalPosition = 'top';
   mostrarSegundoFormulario = false;
   dadosPrimeiroFormulario: any;


  constructor(private _snackBar: MatSnackBar, private pedidosService : pedidosService, private formBuilder: FormBuilder){  }

  ngOnInit(): void {

    this.pedidosService.obterUltimoId().subscribe(ultimoId => {
      const novoId = ultimoId + 1;

      this.PedidosForm = this.formBuilder.group({
        id: new FormControl(novoId),
        name: new FormControl(this.dadosdoPedidos?.name || "", [Validators.required]),
        sobrenome: new FormControl(this.dadosdoPedidos?.sobrenome || "", [Validators.required]),
        Bordas: new FormControl(this.dadosdoPedidos?.Bordas || "", [Validators.required]),
        Massas: new FormControl(this.dadosdoPedidos?.Massas || "", [Validators.required]),
        Sabores: new FormControl(this.dadosdoPedidos?.sabores || "", [Validators.required]),
        Sabores2: new FormControl(this.dadosdoPedidos?.sabores2 || "", [Validators.required]),
        Situacao: new FormControl("Em producao"),
        endereco: this.formBuilder.group({
          rua: new FormControl(this.dadosdoPedidos?.endereco?.rua || "", [Validators.required]),
          numero: new FormControl(this.dadosdoPedidos?.endereco?.numero || "", [Validators.required]),
          bairro: new FormControl(this.dadosdoPedidos?.endereco?.bairro || "", [Validators.required]),
        }),
        dataDeCriacao: new FormControl(new Date())
      });
    });

   


  }
  
  submit(){
    
    console.log(this.PedidosForm.value);
    this.onSumbit.emit(this.PedidosForm.value);

    const id = this.PedidosForm.controls["id"].value;
    
    this._snackBar.open(`Pedido do Número #${id} confirmado!`, 'Fechar', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 10000,
    });

  }
  PreencherFormulario(){
    this.dadosPrimeiroFormulario = this.PedidosForm.value;
    
  }

  AtualizandoaPagina(){
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  }


}

/*

this.onSumbit.emit(this.PedidosForm.value);

*/