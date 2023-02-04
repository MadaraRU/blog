import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  blog: any = [];
  formattedDate: string | null = '';

  constructor(private route: ActivatedRoute, private http: HttpClient, private datePipe: DatePipe, private blogServie: BlogService) { }


  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.blogServie.getBlogById(id)
      .subscribe(data => {
        this.blog.push(data);
        this.formattedDate = this.datePipe.transform(this.blog[0]?.created_at, 'MMM d, y, h:mm:ss a');
      });

  }

  onUpvote(id) {
    this.blogServie.upvoteBlog(id).subscribe(() => {
      const index = this.blog.findIndex(elem => elem._id === id);
      this.blog[index].upvotes += 1;
    });
  }
  onDownvote(id) {
    this.blogServie.downvoteBlog(id).subscribe(() => {
      const index = this.blog.findIndex(elem => elem._id === id);
      this.blog[index].downvotes += 1;
    });
  }

}
