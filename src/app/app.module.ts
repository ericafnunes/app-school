import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { CadastroService } from './cadastro/cadastro.component.service';
import { ListaComponent } from './lista/lista.component';
import { HistoricoService } from './historico.service';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListaComponent,
    LoginComponent, 

  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [CadastroService, HistoricoService],
  bootstrap: [AppComponent]
})
export class AppModule { }