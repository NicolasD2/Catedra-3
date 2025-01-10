import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports:[CommonModule]
})
export class HomeComponent {
  tittle: string = 'Home page';
  isAuthenticated: boolean = false;
  constructor(private router: Router) {}



  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
