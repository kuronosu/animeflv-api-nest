import { Test, TestingModule } from '@nestjs/testing';
import { LatestEpisodesController } from './latest-episodes.controller';

describe('LatestEpisodesController', () => {
  let controller: LatestEpisodesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LatestEpisodesController],
    }).compile();

    controller = module.get<LatestEpisodesController>(LatestEpisodesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
