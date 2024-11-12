import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainModule } from './features/main/main.module';
import { SharedModule } from './shared/shared.module';
import { provideHttpClient } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const angularModules = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  ToastrModule.forRoot(),
];

const applicationModules = [
  MainModule,
  SharedModule,
]


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    angularModules, applicationModules, NgbModule
  ],
  bootstrap: [AppComponent],
  providers: [provideHttpClient()]
})
export class AppModule { }
