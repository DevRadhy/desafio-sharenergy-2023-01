import User from "../entities/User";
import UserRepository from "../repositories/UsersRepository";

class UpdateUser {
  constructor(private usersRepository: UserRepository) {}

  async execute(user: User) {
    const userExists = await this.usersRepository.findById(user.id);

    if(!userExists) {
      throw new Error("User does not exists.");
    }

    await this.usersRepository.save(user);
  }
}

export { UpdateUser };