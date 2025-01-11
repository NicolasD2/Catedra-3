import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule,  FormsModule ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  /**
   * Título dinámico que se muestra en la barra superior.
   */
  title = 'PostFrontend';

  /**
   * Indica si el usuario actual es administrador.
   */
  isAdmin = false;

  /**
   * Indica si el usuario está autenticado.
   */
  isAuthenticated = false;

  constructor(private router: Router, private route: ActivatedRoute) {}


  ngOnInit(): void {
    initFlowbite();


  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }


}
