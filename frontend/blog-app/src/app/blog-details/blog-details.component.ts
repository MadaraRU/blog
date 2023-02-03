import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  blog: any = [];
  formattedDate: string | null = '';

  constructor(private route: ActivatedRoute, private http: HttpClient, private datePipe: DatePipe) { }


  fetchblog(id: string) {
    return this.http.get(`http://localhost:8000/api/blogs/${id}`)
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.fetchblog(id)
      .subscribe(data => {
        this.blog.push(data);
        console.log(this.blog)
        this.formattedDate = this.datePipe.transform(this.blog[0]?.created_at, 'MM/dd/yyyy hh:mm:ss');
      });

  }

}
