import { Controller, Get } from '@nestjs/common';

import { ServerStatusService } from './server-status.service';

@Controller('server-status')
export class ServerStatusController {
  constructor(private readonly serverStatusService: ServerStatusService) {}

  @Get('status')
  getStatus() {
    return this.serverStatusService.getServerStatus();
  }
}
