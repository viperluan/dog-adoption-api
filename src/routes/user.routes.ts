import { Router } from 'express';
import { getRepository } from 'typeorm';

import { User } from '../models/User';
import { CreateUserService } from '../services/CreateUserService';

const userRoutes = Router();

userRoutes.get('/', async (request, response) => {
  const userRepository = getRepository(User);

  const user = await userRepository.find();

  return response.json(user);
});

userRoutes.post('/', async (request, response) => {
  const { name, email, password } = request.body;

  const createUserService = new CreateUserService();

  const user = await createUserService.execute({ name, email, password });

  return response.status(201).json(user);
});

export { userRoutes };
