import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ShowsService } from './shows.service';
import { CreateShowDto } from './dto/create-show.dto';
import { ShowDocument } from './schemas/show.schema';

@Controller('shows')
export class ShowsController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly showsService: ShowsService) { }

  @Get()
  async findAll(): Promise<ShowDocument[]> {
    return this.showsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ShowDocument> {
    return this.showsService.findOne(id);
  }

  @Post()
  async create(@Body() createShowDto: CreateShowDto): Promise<CreateShowDto> {
    return this.showsService.create(createShowDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() show: ShowDocument,
  ): Promise<ShowDocument> {
    return this.showsService.update(id, show);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    this.showsService.remove(id);
  }
}
