import { Module } from '@nestjs/common';

import { BillingController } from './billing.controller';
import { BillingService } from './billing.service';
import { ConfigurationModule, RmqModule } from '@nest-microservices/common';

@Module({
  imports: [RmqModule, ConfigurationModule],
  controllers: [BillingController],
  providers: [BillingService],
})
export class BillingModule {}
