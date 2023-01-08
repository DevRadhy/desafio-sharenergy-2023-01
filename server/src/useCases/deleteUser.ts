import UserRepository from "../repositories/UsersRepository";

class DeleteUser {
  constructor(private userRepository: UserRepository) {}

  async execute(id: string) {
    const user = await this.userRepository.findById(id);

    if(!user) {
      throw new Error("User does not exists.");
    }

    this.userRepository.delete(id);
  }
}

export { DeleteUser };