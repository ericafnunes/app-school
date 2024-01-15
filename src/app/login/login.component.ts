import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  login(): void {
    try {
      const isAuthenticated = this.authService.login(this.username, this.password);

      if (isAuthenticated) {
        this.router.navigate(['/cadastro']);
      } else {
        this.toastr.error('Usuário ou senha inválidos', 'Erro');
      }
    } catch (error) {
      this.toastr.error('Erro ao tentar autenticar usuario no sistema', 'Erro');
    }
  }
}
