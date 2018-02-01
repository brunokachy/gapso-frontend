import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class APIService {
    // URL to web api
    private BASEURL = 'http://localhost:8080/gapso/';

    public VERIFYEMAILADDRESS = this.BASEURL + 'user/verifyEmailAddress'

    constructor(public http: Http) { }

    callAPI(requestData: any, url: string) {
        return this.http
            .post(url, requestData, this.header())
            .map((response: Response) => response.json());
    }

    private header() {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return new RequestOptions({ headers: headers });
    }


}
