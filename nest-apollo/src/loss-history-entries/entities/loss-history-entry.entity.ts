import { ILossHistoryEntry } from '@bts-api-tests/types';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LossHistoryEntry implements ILossHistoryEntry {
  @Field((type) => ID)
  id: string;
  carrier: string;
  startDate: string;
  endDate: string;
}
