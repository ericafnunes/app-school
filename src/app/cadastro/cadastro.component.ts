import { Component } from '@angular/core';
import { CadastroService } from './cadastro.component.service';
import { ICadastroUser } from '../Model/Icadastro-user';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  user!:string;
  listUser!:ICadastroUser[];
  qtdUser!:number;
  constructor(private cadastroService: CadastroService){
    this.listUser = this.cadastroService.users;
  }
  adicionarNovoUser():void{
    this.cadastroService.adicionar(this.user, this.qtdUser);
  }
  excluirUser(index:number):void{
    this.cadastroService.excluirUser(index);
    
    
  }
}
