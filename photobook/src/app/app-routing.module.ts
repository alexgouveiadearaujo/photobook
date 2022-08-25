import { LoginGuard } from './authentication/login.guard';
import { AuthenticationGuard } from './authentication/authentication.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanLoad } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path:'home',
    loadChildren: ()=> import('./home/home.module').then(module => module.HomeModule),
    canLoad: [LoginGuard]
  },
  {
    path:'photographs',
    loadChildren: ()=> import('./photographs/photographs.module').then(m => m.PhotographsModule),
    canLoad:[AuthenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
