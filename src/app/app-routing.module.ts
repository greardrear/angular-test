import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponentComponent } from './post-component/post-component.component';
import { PostDetailsComponent } from './post-details/post-details.component';

const routes: Routes = [
  {path: 'posts', component: PostComponentComponent},
  {path: 'posts/:id', component: PostDetailsComponent},
  {path: '**', redirectTo: 'posts'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
