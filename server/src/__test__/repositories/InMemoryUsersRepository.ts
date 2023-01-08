import User from "../../entities/User";
import UserRepository from "../../repositories/UsersRepository";

class InMemoryUsersReposotiry implements UserRepository {
  public users: User[] = [];
  
  async findMany(): Promise<User[]> {
    return Promise.resolve(this.users);
  }

  async findById(id: string): Promise<User> {
    const user = this.users.find((user) => user.id === id);

    if(!user) {
      throw new Error("User does not exists.");
    }

    return Promise.resolve(user);
  }

  async create(user: User): Promise<User> {
    this.users.push(user);

    return user;
  }

  async save(user: User): Promise<User> {
    const userIndex = this.users.findIndex((databaseUser) => databaseUser.id === user.id);

    this.users[userIndex] = user;

    return Promise.resolve(user);
  }

  delete(id: string): void {
    const users = this.users.filter((user) => user.id !== id);

    this.users = users;
  }
}

export default InMemoryUsersReposotiry;