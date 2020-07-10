import { Router } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import { validate } from 'class-validator';
import User from '../models/User';
import UserRepository from '../repositories/userRepository';

const userRouter = Router();

userRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(User);

    const { name, email, password, nickname, birthday } = request.body;
    const user = repo.create({
      name,
      email,
      password,
      nickname,
      birthday,
    });

    console.log(user);
    const errors = await validate(user);
    console.log(errors);
    if (errors.length === 0) {
      const res = await repo.save(user);
      return response.status(201).json(res);
    }
    return response.status(400).json(errors);
  } catch (err) {
    console.log('err.message :>> ', err.message);
    return response.status(400).send();
  }
});

userRouter.get('/', async (request, response) => {
  response.json(await getRepository(User).find());
});

userRouter.get('/user/:name', async (request, response) => {
  response.json(
    await getCustomRepository(UserRepository).findByName(request.params.name),
  );
});

export default userRouter;
