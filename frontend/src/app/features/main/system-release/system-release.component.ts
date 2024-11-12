import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RequestsService } from '../../../services/requests.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-system-release',
  templateUrl: './system-release.component.html',
  styleUrl: './system-release.component.scss'
})
export class SystemReleaseComponent {
  form!: FormGroup;
  loading: boolean = true;
  systems: any[] = [];
  token: string = '';

  private modalRef: NgbModalRef | null = null;
  @ViewChild('tokenModal')
  tokenModal!: TemplateRef<any>;

  constructor(private fb: FormBuilder, private router: Router,  private toast: ToastrService, private requestsService: RequestsService,  private modalService: NgbModal) {
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

  openTokenModal(): void {
     this.modalRef =  this.modalService.open(this.tokenModal, {
      centered: true,
      backdrop: 'static',
      keyboard: false,
    });
  }

  closeTokenModal(): void {
    this.modalRef?.close()
  }

  submitRelease():void {
    const formData = new FormData();
  
    formData.append('sis', this.form.get('sis')?.value);
    formData.append('chave', this.form.get('chave')?.value);

    this.loading = true;
    this.requestsService.systemRealease(formData).subscribe((res) => {
      switch (res.code) {
        case 200:
          this.toast.success('Máquina liberada com sucesso!')
          this.token = res.chave;
          this.openTokenModal()
          break;

        case 400:
          this.toast.error(res.mensagem)
          break;

        default:
          return;
      }
    }, (error) => {
      this.toast.error(error)
    }).add(() => {
      this.loading = false;
    })
  }
}
