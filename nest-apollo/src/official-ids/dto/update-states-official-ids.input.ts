import { IUpdateStatesOfficialIdsInput } from '@bts-api-tests/types';
import { Field, ID, InputType } from '@nestjs/graphql';
import { UpdateStateOfficialIds } from './update-state-official-ids.input';

@InputType()
export class UpdateStatesOfficialIdsInput
  implements IUpdateStatesOfficialIdsInput
{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => ID)
  transactionId: string;
  states: Array<UpdateStateOfficialIds>;
}
