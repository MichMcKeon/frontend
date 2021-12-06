import { TestBed } from '@angular/core/testing';

import { MysqlrequestsService } from './mysqlrequests.service';

describe('MysqlrequestsService', () => {
  let service: MysqlrequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MysqlrequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
