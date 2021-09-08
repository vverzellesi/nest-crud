import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository, ObjectID } from 'typeorm';
import { Show } from './show.entity';

@Injectable()
export class ShowsService {
  constructor(
    @InjectRepository(Show)
    public readonly showsRepository: MongoRepository<Show>,
  ) { }

  async findAll(): Promise<Show[]> {
    // return [];
    return await this.showsRepository.find();
  }

  async findOne(id: string) {
    return this.showsRepository.findOne(id);
  }

  async create(show: Show) {
    return await this.showsRepository.save(show);
  }

  async update(_id: string, show: Show): Promise<Show> {
    await this.showsRepository.update(_id, show);

    return this.showsRepository.findOne(_id);
  }

  async remove(_id: string): Promise<void> {
    await this.showsRepository.delete(_id);
  }
}
