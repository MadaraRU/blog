import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { DatePipe } from '@angular/common';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpvoteComponent } from './upvote/upvote.component';
import { DownvoteComponent } from './downvote/downvote.component';
import { SortPipe } from './pipes/sort.pipe';
import { SortComponent } from './sort/sort.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogListComponent,
    BlogDetailsComponent,
    AddBlogComponent,
    UpvoteComponent,
    DownvoteComponent,
    SortPipe,
    SortComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
