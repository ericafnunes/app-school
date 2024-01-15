import { Component } from '@angular/core';
import { CadastroService } from '../cadastro/cadastro.component.service';
import { ICadastroUser } from '../Model/Icadastro-user';
import { ToastrService } from 'ngx-toastr';
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
    private historicoService: HistoricoService,
    private toastr: ToastrService,
  ) {
    this.listUser = this.cadastroService.users;
  }

  excluirUser(event: Event, index: number): void {
    console.log('aaaaaa');
    event.preventDefault();
    if (index >= 0 && index < this.listUser.length) {
      const userRemovido = this.listUser[index];
      
      this.historicoService.adicionarEvento({
        timestamp: new Date(),
        tipo: 'Exclusão',
        detalhes: `Exclusão de usuário: ${userRemovido.user}, Matrícula: ${userRemovido.qtdUser}`
      });
      setTimeout(() => {
        this.toastr.success('Usuário excluído com sucesso!!!');
      }, 0);
      this.cadastroService.excluirUser(index);
    } else {
      console.error('Índice inválido ao excluir:', index);
    }
  }
  
  editarUser(event: Event, index: number): void {
    event.preventDefault();
    const userAtual = this.listUser[index];

    this.editedUserIndex = index;
  
    const detalhesAntesEdicao = `Usuário: ${userAtual.user}, Matrícula: ${userAtual.qtdUser}`;
  
    this.historicoService.adicionarEvento({
      timestamp: new Date(),
      tipo: 'Edição (antes)',
      detalhes: detalhesAntesEdicao
    });
  }
  

  salvarEdicao(): void {
    if (this.editedUserIndex !== null) {
      const detalhesDepoisEdicao = `Usuário: ${this.listUser[this.editedUserIndex].user}, Matrícula: ${this.listUser[this.editedUserIndex].qtdUser}`;

      this.historicoService.adicionarEvento({
        timestamp: new Date(),
        tipo: 'Edição (depois)',
        detalhes: detalhesDepoisEdicao
      });
      setTimeout(() => {
        this.toastr.success('Usuário alterado com sucesso!!!');
      }, 0);
      this.editedUserIndex = null; 
    }
  }

}
