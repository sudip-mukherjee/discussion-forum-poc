import { TestBed } from '@angular/core/testing';

import { SbDiscussionForumService } from './sb-discussion-forum.service';

describe('SbDiscussionForumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SbDiscussionForumService = TestBed.get(SbDiscussionForumService);
    expect(service).toBeTruthy();
  });
});
