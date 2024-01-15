import { Injectable } from '@angular/core';
import { ICadastroUser } from '../Model/Icadastro-user';
import { HistoricoService } from '../historico.service';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  users: ICadastroUser[] = [
    {
      user: 'Maria',
      qtdUser: 1,
    },
    {
      user: 'Jose',
      qtdUser: 2,
    },
  ];

  constructor(private historicoService: HistoricoService) {}

  adicionar(userRecebido: string, qtdUserRecebida: number): void {
    const newUser: ICadastroUser = {
      user: userRecebido,
      qtdUser: qtdUserRecebida,
    };
    this.users.push(newUser);

    this.historicoService.adicionarEvento({
      acao: 'Adição',
      usuarioDepois: newUser,
    });
  }

  excluirUser(index: number): void {
    if (index >= 0 && index < this.users.length) {
      this.users.splice(index, 1);
    }
  }

  editarUser(index: number, novoUser: ICadastroUser): void {
    const usuarioAntes = { ...this.users[index] };
    this.users[index] = novoUser;

    this.historicoService.adicionarEvento({
      timestamp: new Date(),
      tipo: 'Edição',
      usuarioAntes: usuarioAntes,
      usuarioDepois: novoUser,
    });
  }
}

