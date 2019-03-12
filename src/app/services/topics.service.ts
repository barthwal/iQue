import { Topic } from "../models/topic.model";
import { AppSericeModule } from "../aap-service.module";
import { Injectable, OnInit } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class TopicsService {
    private topics: Topic[] = [];
    topicsObs = new Subject();

    constructor(private appSerice: AppSericeModule) {
        this.appSerice.getTopics().subscribe(
            data => {
                this.topics = data;
                this.topicsObs.next(data);
            },
            error => console.log(error)
        );
    }

    getTopics() {
        return this.topics.slice();
    }

    getTopic(topicId: number) {
        return this.topics.find((topic) => Number(topic.id) === topicId);
    }
}