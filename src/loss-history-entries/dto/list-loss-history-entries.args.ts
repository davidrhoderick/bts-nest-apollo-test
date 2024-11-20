import { ArgsType } from '@nestjs/graphql';

@ArgsType()
export class ListLossHistoryEntriesArgs {
  transactionId: string;
}
