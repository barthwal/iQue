import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  private topicId: number;
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe((params:Params) => {
      this.topicId = +params.id;
    });
  }

}
