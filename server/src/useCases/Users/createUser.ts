import User from "../../entities/User";
import UserRepository from "../../repositories/UsersRepository";

export class CreateUser {
  constructor(private usersRepository: UserRepository) {}

  async execute(user: User) {
    await this.usersRepository.create(user);

    return user;
  }
}