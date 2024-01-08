import { Component } from '@angular/core';
import { CadastroService } from './cadastro.component.service';
import { ICadastroUser } from '../Model/Icadastro-user';
import { HistoricoService } from '../historico.service';

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

  constructor(
    private cadastroService: CadastroService,
    private historicoService: HistoricoService
  ) {
    this.listUser = this.cadastroService.users;
  }

adicionarNovoUser(): void {
  const novoUsuario: ICadastroUser = { user: this.user, qtdUser: this.qtdUser };

  if (this.editIndex !== null) {
    this.cadastroService.editarUser(this.editIndex, novoUsuario);
    const detalhesAposEdicao = `Edição de usuário (depois): ${this.user}, Matrícula: ${this.qtdUser}`;
    this.historicoService.adicionarEvento({
      timestamp: new Date(),
      tipo: 'Edição (depois)',
      detalhes: detalhesAposEdicao
    });
    this.editIndex = null;
  } else {
    this.cadastroService.adicionar(this.user, this.qtdUser);
    this.historicoService.adicionarEvento({
      timestamp: new Date(),
      tipo: 'Adição',
      detalhes: `Adição de usuário: ${this.user}, Matrícula: ${this.qtdUser}`
    });
  }

  this.limpar();
}


  excluirUser(index: number): void {
    const userRemovido = this.listUser[index];
    this.cadastroService.excluirUser(index);
    this.historicoService.adicionarEvento({
      timestamp: new Date(),
      tipo: 'Exclusão',
      detalhes: `Exclusão de usuário: ${this.user}, Matrícula: ${this.qtdUser}`
    });
  }

  editarUser(index: number): void {
    const userAtual = this.listUser[index];


    this.user = userAtual.user;
    this.qtdUser = userAtual.qtdUser;
    this.editIndex = index;

    const detalhesAntesEdicao = `Usuário: ${userAtual.user}, Matrícula: ${userAtual.qtdUser}`;

    this.historicoService.adicionarEvento({
      timestamp: new Date(),
      tipo: 'Edição (antes)',
      detalhes: detalhesAntesEdicao
    });
  }

  limpar(): void {
    this.user = '';
    this.qtdUser = 0;
    this.editIndex = null;
  }
}

