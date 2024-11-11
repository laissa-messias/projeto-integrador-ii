import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.fb.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  loginSubmit():void {
    
    this.authService.signin(this.form.value).subscribe((res) => {
      this.authService.authChanged(res)
      this.router.navigate(['/home'])
    })
  }
}
