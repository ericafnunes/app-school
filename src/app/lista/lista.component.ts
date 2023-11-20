import { Component } from '@angular/core';
import { CadastroService } from '../cadastro/cadastro.component.service';
import { ICadastroUser } from '../Model/Icadastro-user';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {
  listUser: ICadastroUser[] = [];
  editedUser: ICadastroUser | null = null; 
  editedUserIndex: number | null = null;

  constructor(private cadastroService: CadastroService) {
    this.listUser = this.cadastroService.users;
  }

  excluirUser(index: number): void {
    this.cadastroService.excluirUser(index);
  }

  editarUser(index: number): void {
    const userAtual = this.listUser[index];
    this.editedUser = { ...userAtual }; 
    this.editedUserIndex = index;
  }

  salvarEdicao(): void {
    if (this.editedUser !== null && this.editedUserIndex !== null) {
      this.cadastroService.editarUser(this.editedUserIndex, this.editedUser);
      this.editedUser = null; 
      this.editedUserIndex = null; 
    }
  }
}
