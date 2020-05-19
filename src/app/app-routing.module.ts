import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/helper/auth-guard';
import { LoginGuard } from './core/helper/login-guard';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [LoginGuard],
    loadChildren: () => import('./modules/auth/auth.module')
      .then(m => m.AuthModule)
  }, {
    path: 'pages',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/pages/page.module')
      .then(m => m.PageModule)
  }, {
    path: '',
    redirectTo: 'pages',
    pathMatch: 'full'
  }, {
    path: '**',
    redirectTo: 'pages'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
