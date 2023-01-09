import RandomUsersRepository from "../repositories/RandomUsersRepository";

export class GetRandomUsers {
  constructor(private usersRepository: RandomUsersRepository) {}

  async execute(size: number) {
    const users = await this.usersRepository.getUsers(size);

    return users;
  }
}