import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'authentication', pathMatch: 'full' },
  { 
    path: '', component:LayoutComponent,
    children: [
      { path: 'authentication', loadChildren:() => import('src/app/authentication/authentication.module').then((m) => m.AuthenticationModule) },
      { path: 'page', loadChildren:() => import('src/app/components/page.module').then((m) => m.PageModule) }
      // { path: 'page', loadChildren:() => import('src/app/').then((m) => m.AuthenticationModule) }
      // ... add more routes
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
