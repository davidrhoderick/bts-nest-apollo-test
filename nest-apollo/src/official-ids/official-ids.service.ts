import { Injectable } from '@nestjs/common';
import { UpdateStatesOfficialIdsInput } from './dto/update-states-official-ids.input';
import { ListStatesOfficialIdsArgs } from './dto/list-states-official-ids.args';
import { IStatesOfficialIds } from '@bts-api-tests/types';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

@Injectable()
export class OfficialIdsService {
  async list(args: ListStatesOfficialIdsArgs): Promise<IStatesOfficialIds> {
    console.log('list official IDs args', args);

    await delay(1000);

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
      {
        state: 'CO',
        displayName: 'Colorado',
        officialIds: [
          {
            label: 'State Tax ID',
            code: 'STAX',
            id: '551212412',
          },
        ],
      },
    ];
  }

  async update(
    input: UpdateStatesOfficialIdsInput,
  ): Promise<IStatesOfficialIds> {
    console.log('update input', JSON.stringify(input));

    await delay(1500);

    return input.states;
  }
}
