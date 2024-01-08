import { Component } from '@angular/core';
import { HistoricoService } from './historico.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appservice';

  constructor(public historicoService: HistoricoService) {}

  limparHistorico(): void {
    this.historicoService.limparHistorico();
  }
}


