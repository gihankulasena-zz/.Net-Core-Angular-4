import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";

@Injectable()
export class ValueAPIService {
    private actionUrl: string;
    //constructor(private _http: Http) {
    //    this.actionUrl = 'http://localhost:43355/api/values/';

    //}

    private _postsURL = "http://localhost:43355/api/values/";

    constructor(private http: Http) {
    }

    getPosts(): Observable<any[]> {
        return this.http
            .get(this._postsURL)
            .map((response: Response) => {
                console.log(response.json());
                return <any[]>response.json();
            })
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}