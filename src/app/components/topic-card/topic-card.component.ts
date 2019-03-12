import { Component, OnInit, Input } from '@angular/core';
import { Topic } from '../../models/topic.model';
import { TopicsService } from '../../services/topics.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topic-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.css']
})
export class TopicCardComponent implements OnInit {
  private topic: Topic = this.topicsService.getTopic(this.topicsService.getTopics()[0].id);
  @Input() topicId: number;

  constructor(private topicsService: TopicsService, private router: Router) {}

  ngOnInit() {
    let topic = this.topicsService.getTopic(this.topicId);
    if(!topic) {
      this.router.navigate(["not-found"]);
    } else {
      this.topic = topic;
    }
  }

}
