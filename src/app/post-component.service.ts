import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Post } from "./posts";
@Injectable({
    providedIn: 'root'
}) 

export class PostComponentService {
    
    constructor ( private http: HttpClient) {}

    fetchPosts(): Observable<Post[]>   { 

        return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');

    }

    submitForm(data: any) {
         return this.http.post('https://jsonplaceholder.typicode.com/posts', {
            title: data.value.title,
            body: data.value.body,
            userId: 1,
            id: 101
        });
    }
}