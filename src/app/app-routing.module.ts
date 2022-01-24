import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponentComponent } from './post-component/post-component.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostGuard } from './post.guard';

const routes: Routes = [
  {path: 'posts', component: PostComponentComponent},
  {path: 'posts/:id', component: PostDetailsComponent,canActivate: [PostGuard]},
  {path: '**', redirectTo: 'posts'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
