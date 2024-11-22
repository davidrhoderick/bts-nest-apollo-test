import { IListStatesOfficialIdsArgs } from '@bts-api-tests/types';
import { ArgsType } from '@nestjs/graphql';

@ArgsType()
export class ListStatesOfficialIdsArgs implements IListStatesOfficialIdsArgs {
  transactionId: string;
}
