import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private authService: AuthService, private router: Router) {}

  logout():void {
    this.authService.clear()
    this.router.navigate(['/login'])
  }
}
