import { getRepository } from 'typeorm';

import { Adoption } from '../models/Adoption';

interface ICreateAdoptionServiceDTO {
  user_id: string;
  institution_id: string;
}

class CreateAdoptionService {
  public async execute({
    user_id,
    institution_id,
  }: ICreateAdoptionServiceDTO): Promise<Adoption> {
    const adoptionRepository = getRepository(Adoption);

    const adoption = adoptionRepository.create({
      user_id,
      institution_id,
    });

    await adoptionRepository.save(adoption);

    return adoption;
  }
}

export { CreateAdoptionService };
