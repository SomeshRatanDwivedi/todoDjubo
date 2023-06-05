import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoParentComponent } from './components/todo-parent/todo-parent.component';

const routes: Routes = [
  {
    path:'todo',
    component:TodoParentComponent
  },
  {
    path:'',
    redirectTo:'/todo',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
