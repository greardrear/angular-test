import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Post } from "./posts";
import { Posts } from "./Post"
@Injectable({
    providedIn: 'root'
}) 

export class PostComponentService {
    
    constructor ( private http: HttpClient) {}

    fetchPosts(): Observable<Post[]>   { 

        return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');

    }
 headers: any = {'content-type': 'application/json'}

    submitForm(data: any): Observable<any> {
        console.log(data)
        return  this.http.post('https://jsonplaceholder.typicode.com/posts', {
            title: data.title,
            body: data.body,
            userId: 1,
           
        }, this.headers);

        
    }
}