import { IUpdateOfficialId } from '@bts-api-tests/types';
import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateOfficialIdsInput implements IUpdateOfficialId {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => ID)
  code: string;
  id: string;
}
