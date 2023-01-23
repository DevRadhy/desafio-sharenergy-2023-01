import User from "../../entities/User";
import { AppError } from "../../errors/AppError";
import UserRepository from "../../repositories/UsersRepository";

class UpdateUser {
  constructor(private usersRepository: UserRepository) {}

  async execute(user: User) {
    const userExists = await this.usersRepository.findById(user.id);

    if(!userExists) {
      throw new AppError("User does not exists.");
    }

    await this.usersRepository.save(user);

    return user;
  }
}

export { UpdateUser };