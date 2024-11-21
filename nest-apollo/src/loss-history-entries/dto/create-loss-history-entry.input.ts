import { InputType } from '@nestjs/graphql';
import { ICreateLossHistoryEntry } from '@bts-api-tests/types';

@InputType()
export class CreateLossHistoryEntryInput implements ICreateLossHistoryEntry {
  carrier: string;
  startDate: string;
  endDate: string;
}
