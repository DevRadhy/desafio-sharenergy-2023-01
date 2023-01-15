import { UserFactory } from "../../__tests__/factories/UserFactory";
import InMemoryUsersRepository from "../../__tests__/repositories/InMemoryUsersRepository";
import { CreateUser } from "./createUser";

describe("Create User", () => {
  it("Should be able to create a new user", async () => {
    const inMemoryUsersRepository = new InMemoryUsersRepository();
    const createUser = new CreateUser(inMemoryUsersRepository);

    const user = await createUser.execute(UserFactory());

    expect(inMemoryUsersRepository.users.length).toEqual(1);
    expect(inMemoryUsersRepository.users[0]).toEqual(user);
  });
})