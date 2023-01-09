import User from "../entities/User";

abstract class UserRepository {
  abstract getUsers(): Promise<User[]>;
  abstract findById(id: string): Promise<User>;
  abstract create(user: User): Promise<User>;
  abstract save(user: User): Promise<User>;
  abstract delete(id: string): void;
}

export default UserRepository;