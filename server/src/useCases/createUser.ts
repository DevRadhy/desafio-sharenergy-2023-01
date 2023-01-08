import User from "../entities/User";
import UserRepository from "../repositories/UsersRepository";

export class CreateUser {
  constructor(private usersRepository: UserRepository) {}

  async execute(data: User) {
    const user = new User(data);

    await this.usersRepository.create(user);

    return user;
  }
}