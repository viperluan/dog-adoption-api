import { getRepository } from 'typeorm';

import { AdoptionDog } from '../models/AdoptionDog';

interface ICreateAdoptionDogService {
  adoption_id: string;
  dog_id: string;
}

class CreateAdoptionDogService {
  public async execute({
    adoption_id,
    dog_id,
  }: ICreateAdoptionDogService): Promise<AdoptionDog> {
    const adoptionDogRepository = getRepository(AdoptionDog);

    const adoptionDog = adoptionDogRepository.create({ adoption_id, dog_id });

    await adoptionDogRepository.save(adoptionDog);

    return adoptionDog;
  }
}

export { CreateAdoptionDogService };
