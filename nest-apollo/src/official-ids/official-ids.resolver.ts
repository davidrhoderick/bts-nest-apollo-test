import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OfficialIdsService } from './official-ids.service';
import { UpdateStatesOfficialIdsInput } from './dto/update-states-official-ids.input';
import { ListStatesOfficialIdsArgs } from './dto/list-states-official-ids.args';
import { StateOfficialIds } from './entities/state-official-ids.entity';

@Resolver()
export class OfficialIdsResolver {
  constructor(private readonly officialIdsService: OfficialIdsService) {}

  @Query(() => [StateOfficialIds])
  listStatesOfficialIds(
    @Args()
    args: ListStatesOfficialIdsArgs,
  ) {
    return this.officialIdsService.list(args);
  }

  @Mutation(() => [StateOfficialIds])
  updateStatesOfficialIds(
    @Args('updateStatesOfficialIdsInput')
    updateStatesOfficialIdsInput: UpdateStatesOfficialIdsInput,
  ) {
    return this.officialIdsService.update(updateStatesOfficialIdsInput);
  }
}
