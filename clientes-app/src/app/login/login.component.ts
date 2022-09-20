import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Usuario } from './model/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  username!: string;
  password!: string;
  cadastrando!: boolean;
  mensagemSucesso!: string;
  errors: string[] = []

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  onSubmit(){
    this.authService.login(this.username, this.password)
    .subscribe(response => {
        const access_token = JSON.stringify(response);
        localStorage.setItem('access_token', access_token);
        this.router.navigate(['/home'])
    }, errorResponse => {
      console.log(this.username + " " + this.password)
      this.errors = ['usuário e/ou senha incorretos.']
    })

  }

  preparaCadastrar(){
    this.cadastrando = true
  }

  cancela(){
    this.cadastrando = false;
  }

cadastrar(){
  const usuario: Usuario = new Usuario();
  usuario.password = this.password;
  usuario.username = this.username;
  this.authService
    .salvar(usuario)
    .subscribe(
      resposne => {
          this.mensagemSucesso = "Cadastro realizado com sucesso! Efetue login"
          this.cadastrando = false;
          this.username = '';
          this.password = '';
          this.errors = [];
      }, errorResponse => {
        this.mensagemSucesso = "";
        this.errors = errorResponse.error.errors;
      }
    )
}

 
}
