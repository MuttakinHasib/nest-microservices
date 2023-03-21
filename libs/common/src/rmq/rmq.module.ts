import { ClientsModule, Transport } from '@nestjs/microservices';
import { RmqService } from './rmq.service';
import { DynamicModule, Module } from '@nestjs/common';
import { ConfigurationService } from '../configuration/configuration.service';

interface RmqModuleOptions {
  name: string;
}

@Module({
  imports: [],
  controllers: [],
  providers: [RmqService],
  exports: [RmqService],
})
export class RmqModule {
  static register({ name }: RmqModuleOptions): DynamicModule {
    return {
      module: RmqModule,
      imports: [
        ClientsModule.registerAsync([
          {
            name,
            useFactory: (configurationService: ConfigurationService) => ({
              transport: Transport.RMQ,
              options: {
                urls: [configurationService.RABBIT_MQ_URI],
                queue: configurationService[`RABBIT_MQ_${name}_QUEUE`],
              },
            }),
            inject: [ConfigurationService],
          },
        ]),
      ],
      exports: [ClientsModule],
    };
  }
}
