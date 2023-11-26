import { Test, TestingModule } from '@nestjs/testing';

import { ServerStatusService } from '@backend/features/server-status/server-status.service';

describe('Status service', () => {
  let serverStatusService: ServerStatusService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServerStatusService],
    }).compile();

    serverStatusService = module.get(ServerStatusService);
  });

  it('should be defined', () => {
    expect(serverStatusService).toBeDefined();
  });

  describe('when getting health status', () => {
    it('it should return true', () => {
      const status = serverStatusService.getServerStatus();
      expect(status).toStrictEqual({
        status: 'Alive!',
      });
    });
  });
});
