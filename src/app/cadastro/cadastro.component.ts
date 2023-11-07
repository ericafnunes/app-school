import { Component } from '@angular/core';
import { CadastroService } from './cadastro.component.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  user!:string;
  listUser!: string[];
  constructor(private cadastroService: CadastroService){
    this.listUser = this.cadastroService.users
  }
}
