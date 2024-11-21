import { ILossHistoryEntry } from '@bts-api-tests/types';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LossHistoryEntry implements ILossHistoryEntry {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => ID)
  id: string;
  carrier: string;
  startDate: string;
  endDate: string;
}
