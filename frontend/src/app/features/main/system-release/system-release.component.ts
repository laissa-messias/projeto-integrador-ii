import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RequestsService } from '../../../services/requests.service';

@Component({
  selector: 'app-system-release',
  templateUrl: './system-release.component.html',
  styleUrl: './system-release.component.scss'
})
export class SystemReleaseComponent {
  form!: FormGroup;
  loading: boolean = true;
  systems: any[] = [];

  constructor(private fb: FormBuilder, private router: Router,  private toast: ToastrService, private requestsService: RequestsService) {
    this.form = this.fb.group({
      sis: ['', [Validators.required]],
      chave: ['', [Validators.required]],
    });
  }

  ngOnInit():void {
    this.requestsService.getSystems().subscribe((res) => {
      switch (res.code) {
        case 200:
          this.systems = res.sistemas.sistemas;
          this.loading = false;
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

  submitRelease():void {
    this.requestsService.systemRealease(this.form.value).subscribe((res) => {
      switch (res.code) {
        case 200:
          this.toast.success('Máquina liberada com sucesso!')
          this.router.navigate(['/home'])
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
