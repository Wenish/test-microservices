import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {
    console.log('hi app service')
  }
  getHello(): string {
    return 'Hello World!';
  }
}