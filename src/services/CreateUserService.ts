import { getRepository } from 'typeorm';

import { AppError } from '../errors/AppError';
import { User } from '../models/User';

interface ICreateUserServiceDTO {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({
    name,
    email,
    password,
  }: ICreateUserServiceDTO): Promise<User> {
    const userRepository = getRepository(User);

    const userExists = await userRepository.find({ where: { email } });

    if (userExists.length > 0) {
      throw new AppError('This email already exists.', 400);
    }

    const user = userRepository.create({
      name,
      email,
      password,
    });

    await userRepository.save(user);

    return user;
  }
}

export { CreateUserService };
