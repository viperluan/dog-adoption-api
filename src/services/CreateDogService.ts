import { getRepository } from 'typeorm';

import { Dog } from '../models/Dog';

interface ICreateDogService {
  name: string;
  birthday: Date;
  weight: number;
  institution_id: string;
}

class CreateDogService {
  public async execute({
    name,
    birthday,
    weight,
    institution_id,
  }: ICreateDogService): Promise<Dog> {
    const dogRepository = getRepository(Dog);

    const dog = dogRepository.create({
      name,
      birthday,
      weight,
      institution_id,
    });

    await dogRepository.save(dog);

    return dog;
  }
}

export { CreateDogService };
