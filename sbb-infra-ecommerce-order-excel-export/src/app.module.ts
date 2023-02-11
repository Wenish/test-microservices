import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CheckoutProcessor } from './checkout.processor';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    BullModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        redis: {
          host: configService.get('redis.host'),
          port: configService.get('redis.port'),
          username: 'default',
          password: 'Fv8tlHCKrsuHi2H3gB3E'
        },
      }),
      inject: [ConfigService],
    }),
    BullModule.registerQueue({
      name: 'checkout',
    })
  ],
  controllers: [AppController],
  providers: [
    AppService,
    CheckoutProcessor
  ],
})
export class AppModule {}
