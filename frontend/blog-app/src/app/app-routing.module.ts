import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogListComponent } from './blog-list/blog-list.component';

const routes: Routes = [
  { path: '', component: BlogListComponent },
  { path: "readmore/:id", component: BlogDetailsComponent },
  { path: "add", component: AddBlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
