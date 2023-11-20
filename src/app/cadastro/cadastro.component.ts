import { Component } from '@angular/core';
import { CadastroService } from './cadastro.component.service';
import { ICadastroUser } from '../Model/Icadastro-user';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  user: string = '';
  qtdUser: number = 0;
  listUser: ICadastroUser[] = [];
  editIndex: number | null = null;

  constructor(private cadastroService: CadastroService) {
    this.listUser = this.cadastroService.users;
  }

  adicionarNovoUser(): void {
    if (this.editIndex !== null) {
      const novoUsuario: ICadastroUser = { user: this.user, qtdUser: this.qtdUser };
      this.cadastroService.editarUser(this.editIndex, novoUsuario);
      this.editIndex = null;
    } else {
      this.cadastroService.adicionar(this.user, this.qtdUser);
    }
    this.limpar();
  }

  excluirUser(index: number): void {
    this.cadastroService.excluirUser(index);
  }

  editarUser(index: number): void {
    const userAtual = this.listUser[index];
    this.user = userAtual.user;
    this.qtdUser = userAtual.qtdUser;
    this.editIndex = index;
  }

  limpar(): void {
    this.user = '';
    this.qtdUser = 0;
  }
}

