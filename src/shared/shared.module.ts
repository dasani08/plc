import { Global, HttpModule, Module } from '@nestjs/common';

import { ConfigService } from './services/config.service';

@Global()
@Module({
  imports: [HttpModule],
  providers: [ConfigService],
  exports: [HttpModule, ConfigService],
})
export class SharedModule {}
