import UserRepository from "../repositories/UsersRepository";

class FindUser {
  constructor(private userRepository: UserRepository) {}

  async execute(id: string) {
    const user = await this.userRepository.findById(id);

    if(!user) {
      throw new Error("User does not exists.");
    }

    return user;
  }
}

export { FindUser };