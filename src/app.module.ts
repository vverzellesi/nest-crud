import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShowsModule } from './shows/shows.module';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ShowsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/victordb'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
