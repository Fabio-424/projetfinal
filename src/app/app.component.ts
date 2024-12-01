import { Component } from '@angular/core';
import { AuthService } from './auth.service'; // Importando o serviço de autenticação
import { User } from 'firebase/auth';  // Importando o tipo User da versão modular do Firebase

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'plataforma-videos';
  user: User | null = null;


  constructor(private authService: AuthService) {
    // Observando a autenticação do usuário
    this.authService.getUser().subscribe(user => {
      this.user = user;  // Atualiza o usuário quando o estado de autenticação mudar
    });
  }

  login() {
    this.authService.loginWithGoogle().then(() => {
      console.log('Usuário logado com sucesso!');
    }).catch(err => {
      console.log('Erro ao fazer login', err);
    });
  }

  logout() {
    this.authService.logout().then(() => {
      console.log('Usuário deslogado!');
    }).catch(err => {
      console.log('Erro ao deslogar', err);
    });
  }
}
