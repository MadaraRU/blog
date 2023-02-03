import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent {

  reactiveForm: FormGroup

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      author: new FormControl(null, [Validators.required]),
      content: new FormControl(null, [Validators.required])

    })
  }

  onSubmit() {
    const blogInputs = this.reactiveForm.value;
    console.log(blogInputs)
    this.http.post('http://localhost:8000/api/blogs', blogInputs).subscribe({
      next: res => {
        if (res) {
          this.router.navigate(['/'])
        }
      },
      error(err) {
        console.log(err)
        return
      },
    })
  }

}
