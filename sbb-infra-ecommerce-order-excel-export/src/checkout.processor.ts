import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('checkout')
export class CheckoutProcessor {
  @Process()
  async handleCheckout(job: Job<unknown>) {
    console.log('Start...')
    console.log(job.data)
    console.log('Completed...')
  }
}