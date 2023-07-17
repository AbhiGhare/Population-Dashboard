import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'basic',
    loadChildren:()=>import('./basic/basic.module').then(m=>m.BasicModule)
  },
  {
    path:'advance',
    loadChildren:()=>import('./advance/advance.module').then(m=>m.AdvanceModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
