import { Module } from '@nestjs/common';
import { OfficialIdsService } from './official-ids.service';
import { OfficialIdsResolver } from './official-ids.resolver';

@Module({
  providers: [OfficialIdsResolver, OfficialIdsService],
})
export class OfficialIdsModule {}
