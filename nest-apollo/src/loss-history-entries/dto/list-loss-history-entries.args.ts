import { IListLossHistoryEntriesArgs } from '@bts-api-tests/types';
import { ArgsType } from '@nestjs/graphql';

@ArgsType()
export class ListLossHistoryEntriesArgs implements IListLossHistoryEntriesArgs {
  transactionId: string;
}
