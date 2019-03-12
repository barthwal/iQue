import { Component, OnInit } from '@angular/core';
import { Topic } from '../../models/topic.model';
import { TopicsService } from '../../services/topics.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  topics: Topic[];
  constructor(private topicsService: TopicsService) { }

  ngOnInit() {
    if(this.topicsService.getTopics().length) {
      this.topics = this.topicsService.getTopics();
    }
    this.topicsService.topicsObs.subscribe(
      (topics: Topic[]) => this.topics = topics,
      error => console.log(error)
    );
  }
}
