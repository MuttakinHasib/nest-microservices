/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { RmqOptions, Transport } from '@nestjs/microservices';
import { ConfigurationService } from '../configuration/configuration.service';

@Injectable()
export class RmqService {
  constructor(private readonly configurationService: ConfigurationService) {}

  getOptions(queue: string, noAck = false): RmqOptions {
    return {
      transport: Transport.RMQ,
      options: {
        urls: [this.configurationService.RABBIT_MQ_URI],
        queue: this.configurationService[`RABBIT_MQ_${queue}_QUEUE`],
        noAck,
        persistent: true,
      },
    };
  }
}
