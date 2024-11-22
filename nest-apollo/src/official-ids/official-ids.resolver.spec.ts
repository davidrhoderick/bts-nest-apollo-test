import { Test, TestingModule } from '@nestjs/testing';
import { OfficialIdsResolver } from './official-ids.resolver';
import { OfficialIdsService } from './official-ids.service';

describe('OfficialIdsResolver', () => {
  let resolver: OfficialIdsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OfficialIdsResolver, OfficialIdsService],
    }).compile();

    resolver = module.get<OfficialIdsResolver>(OfficialIdsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
