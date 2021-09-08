import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShowsModule } from './shows/shows.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Show } from './shows/show.entity';
import { join } from 'path';

@Module({
  imports: [
    ShowsModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      // url: 'mongodb://localhost:27017',
      host: 'localhost',
      port: 27017,
      useNewUrlParser: true,
      autoLoadEntities: true,
      useUnifiedTopology: true,
      database: 'victordb',
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
