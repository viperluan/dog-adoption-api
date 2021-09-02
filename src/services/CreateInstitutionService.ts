import { getRepository } from 'typeorm';

import { AppError } from '../errors/AppError';
import { Institution } from '../models/Institution';

interface ICreateInstitutionServiceDTO {
  name: string;
  email: string;
  password: string;
  cnpj: string;
  city: string;
  country: string;
}

class CreateInstitutionService {
  public async execute({
    name,
    email,
    password,
    cnpj,
    city,
    country,
  }: ICreateInstitutionServiceDTO): Promise<Institution> {
    const institutionRepository = getRepository(Institution);

    const nameExists = await institutionRepository.find({
      where: { name },
    });

    if (nameExists.length > 0) {
      throw new AppError('This name already exists.', 400);
    }

    const emailExists = await institutionRepository.find({
      where: { email },
    });

    if (emailExists.length > 0) {
      throw new AppError('This email already exists.', 400);
    }

    const cnpjExists = await institutionRepository.find({
      where: { cnpj },
    });

    if (cnpjExists.length > 0) {
      throw new AppError('This CNPJ already exists.', 400);
    }

    const institution = institutionRepository.create({
      name,
      email,
      password,
      cnpj,
      city,
      country,
    });

    await institutionRepository.save(institution);

    return institution;
  }
}

export { CreateInstitutionService };
