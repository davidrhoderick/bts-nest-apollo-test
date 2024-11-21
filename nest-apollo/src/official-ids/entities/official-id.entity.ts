import { IOfficialId } from '@bts-api-tests/types';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class OfficialId implements IOfficialId {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => ID)
  id: string;
  code: string;
  label: string;
}
