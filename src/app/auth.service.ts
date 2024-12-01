import { Injectable } from '@angular/core';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, User } from 'firebase/auth'; // Usando a versão modular do Firebase
import { Observable, from } from 'rxjs';  // Importando o 'from' para converter promessas em observáveis

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  // Método de login com o Google usando a API modular
  loginWithGoogle(): Promise<any> {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);  // Retorna o Promise com os dados do login
  }

  // Método de logout
  logout(): Promise<void> {
    const auth = getAuth();
    return signOut(auth);  // Retorna o Promise de logout
  }

  // Método para obter o usuário autenticado
  getUser(): Observable<User | null> {
    const auth = getAuth();
    // Usando 'from()' para transformar o evento em Observable
    return from(new Promise<User | null>((resolve) => {
      auth.onAuthStateChanged(resolve); // A Promise resolve o usuário ou null
    }));
  }
}
