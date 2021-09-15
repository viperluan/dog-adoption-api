import { Router } from 'express';
import { getRepository } from 'typeorm';

import { Dog } from '../models/Dog';
import { CreateDogService } from '../services/CreateDogService';

const dogRoutes = Router();

dogRoutes.get('/', async (request, response) => {
  const dogRepository = getRepository(Dog);

  const dogs = await dogRepository.find();

  return response.json(dogs);
});

dogRoutes.post('/', async (request, response) => {
  const { name, birthday, weight, institution_id } = request.body;

  const createDogService = new CreateDogService();

  const dog = await createDogService.execute({
    name,
    birthday,
    weight,
    institution_id,
  });

  return response.json(dog);
});

export { dogRoutes };
