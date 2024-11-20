import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateLossHistoryEntryInput {
  @Field((type) => ID)
  id: string;
  carrier: string;
  startDate: string;
  endDate: string;
}
