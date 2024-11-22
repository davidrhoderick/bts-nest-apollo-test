import { IStateOfficialIds } from '@bts-api-tests/types';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { OfficialId } from './official-id.entity';

@ObjectType()
export class StateOfficialIds implements IStateOfficialIds {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => ID)
  state: string;
  displayName: string;
  officialIds: OfficialId[];
}
