import { AbstractDocument } from '@nest-microservices/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Order extends AbstractDocument {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  phone: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
