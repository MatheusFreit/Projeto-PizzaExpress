import { Component } from '@angular/core';
import { pedidosService } from 'src/app/services/pedidos.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user!: string;
  senh!: string;

  constructor(private pedidos: pedidosService, private router: Router) {}

  Sistema() {
    const username = this.user;
    const password = this.senh;

    // Chama a função validarUsuarioSenha do serviço pedidos
    this.validarUsuarioSenha(username, password).subscribe((isValid: boolean) => {
      // Lógica para tratar o resultado da validação
      if (isValid) {
        console.log('Login bem-sucedido');
        this.router.navigate(['/Paniel']);
      } else {
        console.log('Login falhou. Usuário ou senha incorretos.');
      }
    });
  }

  validarUsuarioSenha(username: string, password: string): Observable<boolean> {
    // Chama a função do serviço pedidos
    return this.pedidos.validarUsuarioSenha(username, password);
  }
}
