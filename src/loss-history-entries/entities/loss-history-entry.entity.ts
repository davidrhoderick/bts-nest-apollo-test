import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LossHistoryEntry {
  @Field((type) => ID)
  id: string;
  carrier: string;
  startDate: string;
  endDate: string;
}
