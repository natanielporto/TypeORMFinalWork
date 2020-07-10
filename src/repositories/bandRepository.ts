import { EntityRepository, Repository } from 'typeorm';
import Band from '../models/Band';

@EntityRepository(Band)
export default class BandRepository extends Repository<Band> {
  public async findByName(name: string): Promise<any> {
    return this.find({
      where: {
        name,
      },
    });
  }
}
