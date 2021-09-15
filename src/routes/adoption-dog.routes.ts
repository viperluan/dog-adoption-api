import { Router } from 'express';
import { getRepository } from 'typeorm';

import { AdoptionDog } from '../models/AdoptionDog';
import { CreateAdoptionDogService } from '../services/CreateAdoptionDogService';

const adoptionDogRoutes = Router();

adoptionDogRoutes.get('/', async (request, response) => {
  const adoptionDogRepository = getRepository(AdoptionDog);

  const adoptionDogs = await adoptionDogRepository.find();

  return response.json(adoptionDogs);
});

adoptionDogRoutes.post('/', async (request, response) => {
  const { adoption_id, dog_id } = request.body;

  const createAdoptionDogService = new CreateAdoptionDogService();

  const adoptionDog = await createAdoptionDogService.execute({
    adoption_id,
    dog_id,
  });

  return response.json(adoptionDog);
});

export { adoptionDogRoutes };
