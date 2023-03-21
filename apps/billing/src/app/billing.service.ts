import { Injectable } from '@nestjs/common';

@Injectable()
export class BillingService {
  getData(): { message: string } {
    return { message: 'Welcome to billing!' };
  }
}
