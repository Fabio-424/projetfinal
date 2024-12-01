import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service'; // Ajustando o caminho para o arquivo
import { User } from 'firebase/auth';
import { CommonModule } from '@angular/common'; // Importando o CommonModule

@Component({
  selector: 'app-login',
  standalone: true,  // Marca o componente como standalone
  imports: [CommonModule],  // Adiciona o CommonModule ao array de imports
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User | null = null;  // Variável para armazenar o usuário logado
  errorMessage: string = '';  // Variável para armazenar possíveis mensagens de erro

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Observando a mudança no estado de autenticação
    this.authService.getUser().subscribe(
      user => {
        this.user = user;  // Atualiza o usuário logado
        this.errorMessage = '';  // Limpa mensagem de erro
      },
      error => {
        this.errorMessage = 'Erro ao verificar o usuário';  // Exibe erro caso ocorra
      }
    );
  }

  loginWithGoogle(): void {
    this.authService.loginWithGoogle().then(() => {
      console.log('Usuário logado com sucesso!');
    }).catch((error) => {
      this.errorMessage = 'Erro ao fazer login com o Google: ' + error.message;  // Exibe erro no login
      console.log(error);
    });
  }

  logout(): void {
    this.authService.logout().then(() => {
      console.log('Usuário deslogado!');
    }).catch((error) => {
      this.errorMessage = 'Erro ao fazer logout: ' + error.message;  // Exibe erro no logout
      console.log(error);
    });
  }
}
