import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../../services/requests.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrl: './request-list.component.scss'
})
export class RequestListComponent implements OnInit {
  requests: any[] = [];
  status: number = 99;
  loading: boolean = true;

  constructor(private requestsService: RequestsService, private toast: ToastrService, private router: Router) { }

  ngOnInit(): void {
   this.getList(this.status)
  }

  getList(status: number): void {
    this.loading = true;
    this.requestsService.getListByStatus(status).subscribe((res) => {
      switch (res.code) {
        case 200:
          this.requests = res.solicitacoes.solicitacoes;
          break;

        case 400:
          this.toast.error(res.data.mensagem)
          break;

        default:
          return;
      }
    }, (error) => {
      this.toast.success(error)
    }).add(() => {
      this.loading = false;
    })
  }

  filterList(status: number) {
    this.status = status;
    this.getList(status);
  }

  getStatusColor(status: any): string {
    switch (status) {
      case 'AGUARDANDO ANALISE':
        return 'text-primary'

      case 'APROVADO CLIENTE/AGUARDANDO INICIO':
        return 'text-success'

      default:
         return 'text-secondary'
    }
  }

  detailsRedirect(id: string):void {
    this.router.navigate(['/request-details', id])
  }
}
