import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  usuarioLogado!: string;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.usuarioLogado = this.authService.getUsuarioAutenticado();
  }

  deslogar(){
    this.authService.encerrarSessao();
    this.router.navigate(['/login'])
  }

}
