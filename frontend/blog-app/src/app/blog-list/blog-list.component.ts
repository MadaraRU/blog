import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { SortPipe } from '../pipes/sort.pipe';
import { BlogService } from '../services/blog.service';


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
  providers: [SortPipe],
})
export class BlogListComponent {
  blogs: any;
  searchResult: any
  selectedSortOption = '';

  constructor(private datePipe: DatePipe, private sortPipe: SortPipe, private blogService: BlogService) {

  }
  ngOnInit() {
    this.blogService.getBlogs().subscribe(res => {
      this.blogs = res
      this.blogs.forEach(blog => {
        if (blog.content.length > 100) {
          blog.preview = blog.content.substring(0, 145) + '....'
        } else {
          blog.preview = blog.content
        }
        blog.formattedDate = this.datePipe.transform(blog.created_at, 'MMM d, y, h:mm:ss a');
      })
    })
  }

  onUpvote(id) {
    this.blogService.upvoteBlog(id).subscribe(() => {
      const index = this.blogs.findIndex(blog => blog._id === id);
      this.blogs[index].upvotes += 1;
    });
  }
  onDownvote(id) {
    this.blogService.downvoteBlog(id).subscribe(() => {
      const index = this.blogs.findIndex(blog => blog._id === id);
      this.blogs[index].downvotes += 1;
    });
  }

  handleSortedBlogs(sortedBlogs) {
    this.searchResult = sortedBlogs;

  }

  handleSearch(searchTerm: string) {
    this.searchResult = this.blogs.filter(blog => {
      return (
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }
}


