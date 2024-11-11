import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RequestsService } from '../../../services/requests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-insert',
  templateUrl: './request-insert.component.html',
  styleUrl: './request-insert.component.scss'
})
export class RequestInsertComponent {
  form!: FormGroup;
  systems: any[] = [];
  loading: boolean = true;

  constructor(private fb: FormBuilder, private requestsService: RequestsService, private router: Router,  private toast: ToastrService) {
    this.form = this.fb.group({
      sis: ['', [Validators.required]],
      contato: ['', [Validators.required]],
      tipo: ['CORREÇÃO', [Validators.required]],
      obs: [''],
      file: ['', [Validators.required]],
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

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.form.get('file')?.setValue(input.files[0]);
    }
  }

  submitRequest():void {
    const formData = new FormData();
  
    formData.append('sis', this.form.get('sis')?.value);
    formData.append('contato', this.form.get('contato')?.value);
    formData.append('tipo', this.form.get('tipo')?.value);
    formData.append('obs', this.form.get('obs')?.value);
    
    const fileInput = this.form.get('file')?.value;
    if (fileInput) {
      formData.append('file', fileInput);
    }
    this.requestsService.postRequest(formData).subscribe({
      next: (res) =>{
        switch (res.code) {
          case 200:
            this.router.navigate(['/home'])
            this.toast.success('Solicitação incluída com sucesso!')
            break;
  
          case 400:
            this.toast.error(res.mensagem)
            break;
  
          default:
            return;
        }
      },
      error: (error) => this.toast.error('Erro ao enviar formulário:', error),
    });
  }
}
