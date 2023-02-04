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
  formError: any

  constructor(private http: HttpClient, private router: Router, private blogService: BlogService) { }

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      author: new FormControl(null, [Validators.required]),
      content: new FormControl(null, [Validators.required])

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
        this.formError = err
        console.log(this.formError.error)
        return
      },
    })
  }

}
