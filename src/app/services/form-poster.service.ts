// form-poster.service.ts
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Employee } from '../models/employee.model';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FormPoster {
    private url = 'http://localhost:5000/api/test';
    constructor(private http: Http) { }

    postEmployeeForm(employee: Employee): Observable<any> {
        let body = JSON.stringify(employee);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.url, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getLanguages(): Observable<any> {
        return this.http.get(this.url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body;
        if (res.text()) {
            body = res.json();
        }
        console.log('extract data: ', body);
        return body || {};
    }

    private handleError(error: any) {
        console.error('post error: ', error);
        return Observable.throw(error.status + ": " + error.statusText);
    }
}