import { Module } from '@nestjs/common';

import { ServerStatusController } from './server-status.controller';
import { ServerStatusService } from './server-status.service';

@Module({
  imports: [],
  controllers: [ServerStatusController],
  providers: [ServerStatusService],
})
export class ServerStatusModule {}
