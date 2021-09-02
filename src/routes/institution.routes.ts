import { Router } from 'express';
import { getRepository } from 'typeorm';

import { Institution } from '../models/Institution';
import { CreateInstitutionService } from '../services/CreateInstitutionService';

const institutionRoutes = Router();

institutionRoutes.get('/', async (request, response) => {
  const institutionRepository = getRepository(Institution);

  const institutions = await institutionRepository.find();

  return response.json(institutions);
});

institutionRoutes.post('/', async (request, response) => {
  const { name, email, password, cnpj, city, country } = request.body;

  const createInstitutionService = new CreateInstitutionService();

  const institution = await createInstitutionService.execute({
    name,
    email,
    password,
    cnpj,
    city,
    country,
  });

  return response.status(201).json(institution);
});

export { institutionRoutes };
