import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {
  historico: any[] = [];

  adicionarEvento(evento: any): void {
    this.historico.push(evento);
  }

  limparHistorico(): void {
    this.historico = [];
  }
}
