import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment.development';
import {HttpClient} from "@angular/common/http";

import { Observable } from 'rxjs';
import { Response } from '../models/Reposnse';
import { pizzaria } from '../models/pizzaria';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})



export class pedidosService {
  private apiUrl = `${environment.ApiUrl}`;
  private apiUrl2= `${environment.ApiUrl2}`;


  constructor(private http: HttpClient) { }

  validarUsuarioSenha(username: string, password: string): Observable<boolean> {
    const url = `${this.apiUrl2}`; // Substitua 'validarUsuarioSenha' com o endpoint real no seu backend

    // Supondo que o backend espera um corpo de requisição com 'username' e 'password'
    const body = { username, password };

    // Faça a chamada HTTP para validar o usuário e senha
    return this.http.post<boolean>(url, body);
  
  }

    //Atualiza o banco de pedidos

  GetPedidos() : Observable<Response<pizzaria[]>>{
    return this.http.get<Response<pizzaria[]>>(this.apiUrl);
  }

  //Cria o pedido no banco

  CreatePedido(Pedidos:pizzaria): Observable<Response<pizzaria[]>>{
    return this.http.post<Response<pizzaria[]>>(`${this.apiUrl}`,Pedidos);
  }

  GetPedido(id: number):  Observable<Response<pizzaria>>{
    return this.http.get<Response<pizzaria>>(`${this.apiUrl}/?id=${id}`);
  }

  //Buscando pedido pelo id
  buscarPedidoPorId(id: number): Observable<Response<pizzaria[]>>{
    return this.http.post<Response<pizzaria[]>>(`${this.apiUrl}?id=${id}`,null);
  }
  
  





  // verifica o ultimo id do banco
  obterUltimoId(): Observable<number> {
    const url = `${this.apiUrl}?_sort=id&_order=desc&_limit=1`;

    return this.http.get<any[]>(url).pipe( map(response => {
        const ultimoPedido = response[0];
        return ultimoPedido ? ultimoPedido.id : 0;
      })
    );
  }


}
