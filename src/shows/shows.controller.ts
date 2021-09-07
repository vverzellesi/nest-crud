import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ShowsService } from './shows.service';
import { Show } from './entities/show.entity';

@Controller('shows')
export class ShowsController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly showsService: ShowsService) { }

  @Get()
  async findAll(): Promise<Show[]> {
    return this.showsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Show> {
    return this.showsService.findOne(+id);
  }

  @Post()
  async create(@Body() show: Show): Promise<Show> {
    return this.showsService.create(show);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() show: Show): Promise<void> {
    this.showsService.update(+id, show);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    this.showsService.remove(+id);
  }
}
