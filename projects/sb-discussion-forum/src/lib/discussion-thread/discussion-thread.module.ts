import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicThreadComponent } from './topic-thread/topic-thread.component';

@NgModule({
  declarations: [ TopicThreadComponent],
  imports: [
    CommonModule
  ],
  exports: [ TopicThreadComponent ]
})
export class DiscussionThreadModule { }
