import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class AppService {
  constructor(@InjectQueue('checkout') private checkoutQueue: Queue) {}
  async checkout() {
    console.log('checkout')
    const checkoutQueue = await this.checkoutQueue.add({
      article: 'Shoes',
      buyer: 'test@hello.com'
    },
    {
      removeOnComplete: true
    }
    );
    
  }
}
