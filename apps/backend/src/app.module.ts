import { ServerStatusModule } from '@backend/features/server-status/server-status.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [ServerStatusModule],
})
export class AppModule {}
