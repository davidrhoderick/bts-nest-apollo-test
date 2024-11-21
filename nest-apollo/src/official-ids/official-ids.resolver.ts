import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OfficialIdsService } from './official-ids.service';
import { OfficialId } from './entities/official-id.entity';
import { UpdateStatesOfficialIdsInput } from './dto/update-states-official-ids.input';
import { ListStatesOfficialIdsArgs } from './dto/list-states-official-ids.args';

@Resolver()
export class OfficialIdsResolver {
  constructor(private readonly officialIdsService: OfficialIdsService) {}

  @Query(() => [OfficialId])
  listStatesOfficialIds(
    @Args()
    args: ListStatesOfficialIdsArgs,
  ) {
    return this.officialIdsService.list(args);
  }

  @Mutation(() => [OfficialId])
  updateStatesOfficialIds(
    @Args('updateStatesOfficialIdsInput')
    updateStatesOfficialIdsInput: UpdateStatesOfficialIdsInput,
  ) {
    return this.officialIdsService.update(updateStatesOfficialIdsInput);
  }
}
