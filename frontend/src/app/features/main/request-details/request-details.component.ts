import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestsService } from '../../../services/requests.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrl: './request-details.component.scss'
})
export class RequestDetailsComponent {
  request: any;
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private requestService: RequestsService,private toast: ToastrService, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id') || '';

      this.requestService.getRequestById(id).subscribe((res) => {
        switch (res.code) {
          case 200:
            this.request = res;
            this.loading = false;
            break;
  
          case 400:
            this.toast.error(res.mensagem)
            this.router.navigate(['/request-list'])
            break;
  
          default:
            return;
        }
      })

    });
  }
}
