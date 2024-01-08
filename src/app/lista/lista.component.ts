import { Component } from '@angular/core';
import { CadastroService } from '../cadastro/cadastro.component.service';
import { ICadastroUser } from '../Model/Icadastro-user';
import { HistoricoService } from '../historico.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {
  listUser: ICadastroUser[] = [];
  editedUserIndex: number | null = null;
  userAntesEdicao: ICadastroUser | null = null;

  constructor(
    private cadastroService: CadastroService,
    private historicoService: HistoricoService
  ) {
    this.listUser = this.cadastroService.users;
  }

  excluirUser(index: number): void {
    this.cadastroService.excluirUser(index);
  }

  editarUser(index: number): void {
    this.userAntesEdicao = { ...this.listUser[index] };

    this.editedUserIndex = this.editedUserIndex === index ? null : index;

    if (this.editedUserIndex !== null) {
      const detalhesAntesEdicao = `Usuário: ${this.userAntesEdicao.user}, Matrícula: ${this.userAntesEdicao.qtdUser}`;

      this.historicoService.adicionarEvento({
        timestamp: new Date(),
        tipo: 'Edição (antes)',
        detalhes: detalhesAntesEdicao
      });
    }
  }

  salvarEdicao(): void {
    if (this.editedUserIndex !== null && this.userAntesEdicao !== null) {
      const detalhesDepoisEdicao = `Usuário: ${this.listUser[this.editedUserIndex].user}, Matrícula: ${this.listUser[this.editedUserIndex].qtdUser}`;

      this.historicoService.adicionarEvento({
        timestamp: new Date(),
        tipo: 'Edição (depois)',
        detalhes: detalhesDepoisEdicao
      });

      this.editedUserIndex = null;
      this.userAntesEdicao = null;
    }
  }
}
