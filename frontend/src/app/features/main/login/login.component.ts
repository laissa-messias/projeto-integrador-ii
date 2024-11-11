import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router,  private toast: ToastrService) {
    this.form = this.fb.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  loginSubmit():void {
    
    this.authService.signin(this.form.value).subscribe((res) => {
      switch (res.code) {
        case 200:
          this.authService.authChanged(res)
          this.router.navigate(['/home'])
          this.toast.success('Usuário logado com sucesso!')
          break;

        case 400:
          this.toast.error(res.mensagem)
          break;

        default:
          return;
      }
    }, (error) => {
      this.toast.error(error)
    })
  }
}
