import { InputType } from '@nestjs/graphql';
import { UpdateLossHistoryEntryInput } from './update-loss-history-entry-input.input';
import { CreateLossHistoryEntryInput } from './create-loss-history-entry-input.input';
import { LossHistoryEntry } from '../entities/loss-history-entry.entity';

@InputType()
export class UpdateLossHistoryEntriesInput {
  transactionId: string;
  delete: Array<LossHistoryEntry['id']>;
  update: Array<UpdateLossHistoryEntryInput>;
  create: Array<CreateLossHistoryEntryInput>;
}
