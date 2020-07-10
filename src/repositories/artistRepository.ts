import { EntityRepository, Repository } from 'typeorm';
import Artist from '../models/Artist';

@EntityRepository(Artist)
export default class ArtistRepository extends Repository<Artist> {
  public async findByName(name: string): Promise<any> {
    return this.find({
      where: {
        name,
      },
    });
  }
}
