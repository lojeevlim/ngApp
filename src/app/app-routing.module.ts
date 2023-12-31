import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [

  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '',  loadChildren:() =>  import('./layouts/layout.module').then((m) => m.LayoutModule), },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
