import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './main-header/main-header.component';
import { AppRoutingModule } from '../app-routing.module';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { UploadAreaComponent } from './upload-area/upload-area.component';
import { FormFieldCheckInvalidDirective } from './directives/form-field-check-invalid.directive';
import { FocusFirstInvalidFieldDirective } from './directives/focus.invalid.directive';
import { MainFooterComponent } from './main-footer/main-footer.component';



@NgModule({
  declarations: [
    MainHeaderComponent,
    LoadingSpinnerComponent,
    UploadAreaComponent,
    FocusFirstInvalidFieldDirective,
    FormFieldCheckInvalidDirective,
    MainFooterComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    MainHeaderComponent,
    LoadingSpinnerComponent,
    UploadAreaComponent,
    FocusFirstInvalidFieldDirective,
    FormFieldCheckInvalidDirective,
    MainFooterComponent
  ]
})
export class SharedModule { }
