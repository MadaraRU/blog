import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BlogService {

    constructor(private http: HttpClient) { }

    getBlogs() {
        return this.http.get('http://localhost:8000/api/blogs');
    }

    addBlog(blog: any[]) {
        return this.http.post('http://localhost:8000/api/blogs', blog);
    }

    getBlogById(id: string) {
        return this.http.get(`http://localhost:8000/api/blogs/${id}`);
    }

    upvoteBlog(id: string) {
        return this.http.put(`http://localhost:8000/api/blogs/${id}/upvote`, {})
    }

    downvoteBlog(id: string) {
        return this.http.put(`http://localhost:8000/api/blogs/${id}/downvote`, {})
    }


}