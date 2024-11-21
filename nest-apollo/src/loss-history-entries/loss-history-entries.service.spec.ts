import { Test, TestingModule } from '@nestjs/testing';
import { LossHistoryEntriesService } from './loss-history-entries.service';

describe('LossHistoryEntriesService', () => {
  let service: LossHistoryEntriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LossHistoryEntriesService],
    }).compile();

    service = module.get<LossHistoryEntriesService>(LossHistoryEntriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
