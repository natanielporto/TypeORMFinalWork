import { Router } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import Artist from '../models/Artist';
import ArtistRepository from '../repositories/artistRepository';

const artistRouter = Router();

artistRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Artist);
    const res = await repo.save(request.body);
    return response.status(201).json(res);
  } catch (err) {
    console.log('err.message :>> ', err.message);
    return response.status(400).send();
  }
});

artistRouter.get('/', async (request, response) => {
  response.json(await getRepository(Artist).find());
});

artistRouter.get('/:name', async (request, response) => {
  const repository = getCustomRepository(ArtistRepository);
  const res = await repository.findByName(request.params.name);
  response.json(res);
});

export default artistRouter;
