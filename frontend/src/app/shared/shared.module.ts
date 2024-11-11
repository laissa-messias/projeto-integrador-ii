import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './main-header/main-header.component';
import { AppRoutingModule } from '../app-routing.module';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { UploadAreaComponent } from './upload-area/upload-area.component';



@NgModule({
  declarations: [
    MainHeaderComponent,
    LoadingSpinnerComponent,
    UploadAreaComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    MainHeaderComponent,
    LoadingSpinnerComponent,
    UploadAreaComponent
  ]
})
export class SharedModule { }
