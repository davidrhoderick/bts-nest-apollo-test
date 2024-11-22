import { IStateOfficialIds } from '@bts-api-tests/types';
import { Field, ID, InputType } from '@nestjs/graphql';
import { UpdateOfficialIdInput } from './update-official-id.input';

@InputType()
export class UpdateStateOfficialIdsInput implements IStateOfficialIds {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => ID)
  state: string;
  displayName: string;
  officialIds: UpdateOfficialIdInput[];
}
