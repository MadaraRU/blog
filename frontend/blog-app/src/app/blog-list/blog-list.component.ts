import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent {
  blogs: any;

  constructor(private http: HttpClient, private datePipe: DatePipe) { }

  fetchData() {
    return this.http.get('http://localhost:8000/api/blogs')
  }

  ngOnInit() {
    this.fetchData().subscribe(res => {
      this.blogs = res
      this.blogs.forEach(blog => {
        if (blog.content.length > 100) {
          blog.preview = blog.content.substring(0, 145) + '....'
        } else {
          blog.preview = blog.content
        }
        blog.formattedDate = this.datePipe.transform(blog.created_at, 'MMM d, y, h:mm:ss a');
      })

      console.log(this.blogs)

    })
  }

  onUpvote(id) {
    this.http.put(`http://localhost:8000/api/blogs/${id}/upvote`, {}).subscribe(() => {
      const index = this.blogs.findIndex(blog => blog._id === id);
      this.blogs[index].upvotes += 1;
    });
  }
  onDownvote(id) {
    this.http.put(`http://localhost:8000/api/blogs/${id}/downvote`, {}).subscribe(() => {
      const index = this.blogs.findIndex(blog => blog._id === id);
      this.blogs[index].downvotes += 1;
    });
  }

}
