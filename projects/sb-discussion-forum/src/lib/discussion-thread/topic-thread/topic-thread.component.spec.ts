import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicThreadComponent } from './topic-thread.component';

describe('TopicThreadComponent', () => {
  let component: TopicThreadComponent;
  let fixture: ComponentFixture<TopicThreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicThreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
