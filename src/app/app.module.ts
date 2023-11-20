import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { CadastroService } from './cadastro/cadastro.component.service';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CadastroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
