import { TestBed } from '@angular/core/testing';

import { PosthomeService } from './posthome.service';

describe('PosthomeService', () => {
  let service: PosthomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PosthomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
