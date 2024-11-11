import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { HomeComponent } from './home/home.component';
import { SharedModule } from "../../shared/shared.module";
import { RequestListComponent } from './request-list/request-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RequestInsertComponent } from './request-insert/request-insert.component';
import { RequestDetailsComponent } from './request-details/request-details.component';
import { SystemReleaseComponent } from './system-release/system-release.component';



@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    RequestListComponent,
    RequestInsertComponent,
    RequestDetailsComponent,
    SystemReleaseComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    RouterModule
],
  providers: [
    provideNgxMask()
  ]
})
export class MainModule { }
