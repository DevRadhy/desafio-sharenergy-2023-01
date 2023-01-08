import UserRepository from "../repositories/UsersRepository";

class GetUsers {
  constructor(private userRepository: UserRepository) {}

  async execute() {
    const users = await this.userRepository.findMany();

    return users;
  }
}

export { GetUsers };