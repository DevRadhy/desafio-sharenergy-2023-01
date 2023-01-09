import RandomUser from "../../entities/RandomUser";
import RandomUsersRepository from "../../repositories/RandomUsersRepository";
import { RandomUserFactory } from "../factories/RandomUserFactory";

class InMemoryRandomUsersRepository implements RandomUsersRepository {
  public users: RandomUser[] = [
    RandomUserFactory(),
    RandomUserFactory(),
    RandomUserFactory(),
    RandomUserFactory(),
    RandomUserFactory(),
  ];

  getUsers(size: number): Promise<RandomUser[]> {
    const users = this.users.slice(0, size);

    return new Promise((resolve) => resolve(users));
  }
}

export default InMemoryRandomUsersRepository