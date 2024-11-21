import { IUpdateStateOfficialIds } from '@bts-api-tests/types';
import { Field, ID, InputType } from '@nestjs/graphql';
import { UpdateOfficialIdsInput } from './update-official-ids.input';

@InputType()
export class UpdateStateOfficialIds implements IUpdateStateOfficialIds {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => ID)
  state: string;
  officialIds: UpdateOfficialIdsInput[];
}
