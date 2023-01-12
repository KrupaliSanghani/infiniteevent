import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'homePage',
    loadChildren: () => import('src/app/components/home/home.module').then(m => m.HomeModule)
  }, {
    path: '',
    loadChildren: () => import('src/app/components/layout/layout.module').then(m => m.LayoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
