import { Module } from '@nestjs/common';
import { LossHistoryEntriesService } from './loss-history-entries.service';
import { LossHistoryEntriesResolver } from './loss-history-entries.resolver';

@Module({
  providers: [LossHistoryEntriesResolver, LossHistoryEntriesService],
})
export class LossHistoryEntriesModule {}
