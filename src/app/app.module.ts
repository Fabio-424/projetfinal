import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';  // Seu arquivo de configuração do Firebase
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';  // Importar o AppComponent
import { bootstrapApplication } from '@angular/platform-browser';

// Não há necessidade de declarar o AppComponent no NgModule, pois ele é standalone
@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),  // Configuração do Firebase
    AngularFireAuthModule,
    CommonModule  // Adicionar CommonModule para usar ngIf
  ],
  providers: []
})
export class AppModule {}

// Inicializando a aplicação com o bootstrapApplication
bootstrapApplication(AppComponent);
