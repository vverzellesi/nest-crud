/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ShowsService } from './shows.service';
import { ShowsController } from './shows.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Show, ShowSchema } from './schemas/show.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Show.name, schema: ShowSchema }])],
  controllers: [ShowsController],
  providers: [ShowsService],
})
export class ShowsModule { }
