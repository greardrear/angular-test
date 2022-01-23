import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponentComponent } from './post-component/post-component.component';

const routes: Routes = [
  {path: 'posts', component: PostComponentComponent},
  {path: '**', redirectTo: 'posts'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
