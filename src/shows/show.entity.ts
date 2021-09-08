import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('shows')
export class Show {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  genre: string;

  @Column()
  stars: number;

  constructor(show?: Partial<Show>) {
    Object.assign(this, show);
  }
}
