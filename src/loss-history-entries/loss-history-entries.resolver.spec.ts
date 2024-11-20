import { Test, TestingModule } from '@nestjs/testing';
import { LossHistoryEntriesResolver } from './loss-history-entries.resolver';
import { LossHistoryEntriesService } from './loss-history-entries.service';

describe('LossHistoryEntriesResolver', () => {
  let resolver: LossHistoryEntriesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LossHistoryEntriesResolver, LossHistoryEntriesService],
    }).compile();

    resolver = module.get<LossHistoryEntriesResolver>(
      LossHistoryEntriesResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
