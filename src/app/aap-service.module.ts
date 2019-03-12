import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AppSericeModule {
    private dataPath = "assets/data";
    constructor(private http: Http){}

    getTopics(): Observable<any> {
        let url = this.dataPath+"/topics.json";
        return this.http.get(url).pipe(map(response => {
            let topics = response.json();
            for(let topic of topics) {
                topic.img = "https://api.adorable.io/avatars/100/" + topic.id;
            }
            return topics;
          }));
    }
}