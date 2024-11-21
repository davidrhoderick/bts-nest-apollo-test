import { Injectable } from '@nestjs/common';
import { UpdateStatesOfficialIdsInput } from './dto/update-states-official-ids.input';
import { ListStatesOfficialIdsArgs } from './dto/list-states-official-ids.args';
import { IStatesOfficialIds } from '@bts-api-tests/types';

@Injectable()
export class OfficialIdsService {
  list(args: ListStatesOfficialIdsArgs): IStatesOfficialIds {
    console.log('list official IDs args', args);
    return [
      {
        state: 'HI',
        displayName: 'Hawaii',
        officialIds: [
          {
            label: 'State Unemployment ID',
            code: 'STUN',
            id: '12315123',
          },
        ],
      },
    ];
  }

  update(input: UpdateStatesOfficialIdsInput): IStatesOfficialIds {
    console.log('update input', input);
    return [
      {
        state: 'HI',
        displayName: 'Hawaii',
        officialIds: [
          {
            label: 'State Unemployment ID',
            code: 'STUN',
            id: '12315123',
          },
        ],
      },
    ];
  }
}
