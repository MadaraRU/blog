import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent {

  reactiveForm: FormGroup

  constructor(private router: Router, private blogService: BlogService) { }

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
      author: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
      content: new FormControl(null, [Validators.required, Validators.minLength(10)])

    })
  }

  onSubmit() {
    const blogInputs = this.reactiveForm.value;
    this.blogService.addBlog(blogInputs).subscribe({
      next: res => {
        if (res) {
          this.router.navigate(['/'])
        }
      },
      error: err => {
        return
      },

    })
  }

}
