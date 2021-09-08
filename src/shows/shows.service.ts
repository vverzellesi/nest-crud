import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateShowDto } from './dto/create-show.dto';
import { Show } from './entities/show.entity';
import { ShowDocument } from './schemas/show.schema';

@Injectable()
export class ShowsService {
  constructor(@InjectModel(Show.name) private showModel: Model<ShowDocument>) { }

  async findAll() {
    return await this.showModel.find().exec();
  }

  async findOne(id: string) {
    return await this.showModel.findById(id);
  }

  async findRandom() {
    const all = await this.showModel.find().exec();
    return all[Math.floor(Math.random() * all.length)];
  }

  async create(createShowDto: CreateShowDto): Promise<ShowDocument> {
    const createdShow = new this.showModel(createShowDto);
    return await createdShow.save();
  }

  async update(id: string, show: Show): Promise<ShowDocument> {
    await this.showModel.updateOne({ _id: id }, show).exec();

    return this.showModel.findById(id);
  }

  async remove(id: string): Promise<void> {
    await this.showModel.deleteOne({ _id: id });
  }
}
