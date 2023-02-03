import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Blog {
  title: string;
  content: string;
  author: string;
  upvotes?: number;
  downvotes?: number;
}

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent {
  blogs: any;
  test: any

  constructor(private http: HttpClient) { }

  fetchData() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1')
  }

  ngOnInit() {
    this.fetchData().subscribe(res => {
      this.test = res
      console.log(this.test)
    })

  }


}
