import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent {
  blogs: any;

  constructor(private http: HttpClient) { }

  fetchData() {
    return this.http.get('http://localhost:8000/api/blogs')
  }

  ngOnInit() {
    this.fetchData().subscribe(res => {
      this.blogs = res
      console.log(this.blogs)
    })

  }


}
