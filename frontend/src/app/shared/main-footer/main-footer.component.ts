import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrl: './main-footer.component.scss'
})
export class MainFooterComponent {
  auth: any;

  constructor(private authService: AuthService) {
    this.authService.contextAuth.subscribe((res) => {
      this.auth = res;
    })
  }

}
