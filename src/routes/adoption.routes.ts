import { Router } from 'express';
import { getRepository } from 'typeorm';

import { Adoption } from '../models/Adoption';
import { CreateAdoptionService } from '../services/CreateAdoptionService';

const adoptionRoutes = Router();

adoptionRoutes.get('/', async (request, response) => {
  const adoptionRepository = getRepository(Adoption);

  const adoptions = await adoptionRepository.find();

  return response.json(adoptions);
});

adoptionRoutes.post('/', async (request, response) => {
  const { user_id, institution_id } = request.body;

  const createAdoptionService = new CreateAdoptionService();

  const adoption = await createAdoptionService.execute({
    user_id,
    institution_id,
  });

  return response.json(adoption);
});

export { adoptionRoutes };
