import { Test, TestingModule } from '@nestjs/testing';
import { LatestEpisodesService } from './latest-episodes.service';

describe('LatestEpisodesService', () => {
  let service: LatestEpisodesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LatestEpisodesService],
    }).compile();

    service = module.get<LatestEpisodesService>(LatestEpisodesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
