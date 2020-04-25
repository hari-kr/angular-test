import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class FPLServiceBridge {

    private readonly baseUrl = "https://fantasy.premierleague.com/api/";
    constructor(private http:HttpClient) {

    }

    public getAllData() {
        return this.http.get(this.baseUrl + 'bootstrap-static/');
    }

    public getFixtures() {
        return this.http.get(this.baseUrl + 'fixtures');
    }

}