import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Logger,
  Put,
} from '@nestjs/common';
import { ShowsService } from './shows.service';
import { Show } from './show.entity';

@Controller('shows')
export class ShowsController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly showsService: ShowsService) { }

  @Get()
  async findAll(): Promise<Show[]> {
    Logger.log('entrando controller');

    return await this.showsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Show> {
    return this.showsService.findOne(id);
  }

  @Post()
  async create(@Body() show: Show): Promise<Show> {
    return this.showsService.create(show);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() show: Show): Promise<Show> {
    return this.showsService.update(id, show);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.showsService.remove(id);
  }
}
