import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopicsService } from './services/topics.service';
import { AppRoutingModule } from './app-routing.module';
import { TopicsComponent } from './pages/topics/topics.component';
import { TopicComponent } from './pages/topic/topic.component';
import { TopicCardComponent } from './components/topic-card/topic-card.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AppSericeModule } from './aap-service.module';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    TopicsComponent,
    TopicComponent,
    TopicCardComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [TopicsService, AppSericeModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
