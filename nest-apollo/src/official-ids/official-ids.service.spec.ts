import { Test, TestingModule } from '@nestjs/testing';
import { OfficialIdsService } from './official-ids.service';

describe('OfficialIdsService', () => {
  let service: OfficialIdsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OfficialIdsService],
    }).compile();

    service = module.get<OfficialIdsService>(OfficialIdsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
