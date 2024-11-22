import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OfficialIdsService } from './official-ids.service';
import { UpdateStatesOfficialIdsInput } from './dto/update-states-official-ids.input';
import { ListStatesOfficialIdsArgs } from './dto/list-states-official-ids.args';
import { StateOfficialIds } from './entities/state-official-ids.entity';

@Resolver()
export class OfficialIdsResolver {
  constructor(private readonly officialIdsService: OfficialIdsService) {}

  @Query(() => [StateOfficialIds])
  async listStatesOfficialIds(
    @Args()
    args: ListStatesOfficialIdsArgs,
  ) {
    return await this.officialIdsService.list(args);
  }

  @Mutation(() => [StateOfficialIds])
  async updateStatesOfficialIds(
    @Args('updateStatesOfficialIdsInput')
    updateStatesOfficialIdsInput: UpdateStatesOfficialIdsInput,
  ) {
    return await this.officialIdsService.update(updateStatesOfficialIdsInput);
  }
}
