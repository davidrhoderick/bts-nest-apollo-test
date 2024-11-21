import { ILossHistoryEntry } from '@bts-api-tests/types';
import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateLossHistoryEntryInput implements ILossHistoryEntry {
  @Field((type) => ID)
  id: string;
  carrier: string;
  startDate: string;
  endDate: string;
}
