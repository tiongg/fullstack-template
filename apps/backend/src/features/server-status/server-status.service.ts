import { Injectable } from '@nestjs/common';

@Injectable()
export class ServerStatusService {
  constructor() {}

  getServerStatus() {
    return {
      status: 'Alive!',
    };
  }

  getVersion() {
    return {
      version: '1.0.0',
    };
  }
}
