import { Injectable } from '@nestjs/common';
import { UpdateLossHistoryEntriesInput } from './dto/update-loss-history-entries.input';
import { ListLossHistoryEntriesArgs } from './dto/list-loss-history-entries.args';

@Injectable()
export class LossHistoryEntriesService {
  findAll(args: ListLossHistoryEntriesArgs) {
    console.log('listLossHistoryEntriesInput', args);

    return [
      {
        id: '123141',
        carrier: 'AIG',
        startDate: '2023-09-01',
        endDate: '2024-09-01',
      },
      {
        id: '5124812',
        carrier: 'AMS',
        startDate: '2022-09-01',
        endDate: '2023-09-01',
      },
    ];
  }

  update(updateLossHistoryEntriesInput: UpdateLossHistoryEntriesInput) {
    console.log('updateLossHistoryEntriesInput', updateLossHistoryEntriesInput);

    return [
      {
        id: '123141',
        carrier: 'AIG',
        startDate: '2023-09-01',
        endDate: '2024-09-01',
      },
      {
        id: '5124812',
        carrier: 'AMS',
        startDate: '2022-09-01',
        endDate: '2023-09-01',
      },
    ];
  }
}