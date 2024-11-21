import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LossHistoryEntriesService } from './loss-history-entries.service';
import { LossHistoryEntry } from './entities/loss-history-entry.entity';
import { UpdateLossHistoryEntriesInput } from './dto/update-loss-history-entries.input';
import { ListLossHistoryEntriesArgs } from './dto/list-loss-history-entries.args';

@Resolver()
export class LossHistoryEntriesResolver {
  constructor(
    private readonly lossHistoryEntriesService: LossHistoryEntriesService,
  ) {}

  @Query(() => [LossHistoryEntry])
  listLossHistoryEntries(@Args() args: ListLossHistoryEntriesArgs) {
    return this.lossHistoryEntriesService.findAll(args);
  }

  @Mutation(() => [LossHistoryEntry])
  updateLossHistoryEntries(
    @Args('updateLossHistoryEntriesInput')
    updateLossHistoryEntriesInput: UpdateLossHistoryEntriesInput,
  ) {
    return this.lossHistoryEntriesService.update(updateLossHistoryEntriesInput);
  }
}
