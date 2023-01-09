import RandomUser from "../entities/RandomUser";

abstract class RandomUsersRepository {
  abstract getUsers(size: number): Promise<RandomUser[]>;
}

export default RandomUsersRepository;