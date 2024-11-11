import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/main/login/login.component';
import { HomeComponent } from './features/main/home/home.component';
import { RequestListComponent } from './features/main/request-list/request-list.component';
import { mainGuard } from './guards/mainGuard';
import { loginGuard } from './guards/loginGuard';
import { RequestInsertComponent } from './features/main/request-insert/request-insert.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', canActivate: [loginGuard], component: LoginComponent },
  { path: 'home', canActivate: [mainGuard], component: HomeComponent },
  { path: 'request-list', canActivate: [mainGuard], component: RequestListComponent },
  { path: 'request-insert', canActivate: [mainGuard], component: RequestInsertComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }