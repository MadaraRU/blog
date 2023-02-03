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
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogListComponent,
    BlogDetailsComponent,
    AddBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
