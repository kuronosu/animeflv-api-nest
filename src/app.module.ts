import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import enviroments from './enviroments';
import config, { validationSchema } from './config';
import { AnimesModule } from './animes/animes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      isGlobal: true,
      load: [config],
      validationSchema,
    }),
    AnimesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
