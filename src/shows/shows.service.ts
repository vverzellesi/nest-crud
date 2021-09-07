import { Injectable } from '@nestjs/common';
// import { CreateShowDto } from './dto/create-show.dto';
import { UpdateShowDto } from './dto/update-show.dto';
import { Show } from './entities/show.entity';

@Injectable()
export class ShowsService {
  shows: Show[] = [
    { id: 1, name: 'Modern Family', genre: 'Comedy', stars: 5 },
    { id: 2, name: 'The Office', genre: 'Comedy', stars: 5 },
    { id: 3, name: 'La Casa de Papel', genre: 'Drama', stars: 4 },
  ];

  findAll() {
    return this.shows;
  }

  findOne(id: number) {
    return this.shows.find((show) => show.id === id);
  }

  create(show: Show) {
    let lastIndex = 0;
    if (this.shows.length > 0) {
      lastIndex = this.shows[this.shows.length - 1].id + 1;
    }

    show.id = lastIndex;

    this.shows.push(show);
    return show;
  }

  update(id: number, show: Show): void {
    const showIdToUpdate = this.shows.findIndex((s) => s.id === id);

    this.shows[showIdToUpdate] = show;
  }

  remove(id: number) {
    const showIdToRemove = this.shows.findIndex((s) => s.id === id);

    this.shows.splice(showIdToRemove, 1);
  }
}
