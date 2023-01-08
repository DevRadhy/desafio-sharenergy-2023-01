import { UserFactory } from "../__test__/factories/UserFactory";
import InMemoryUsersReposotiry from "../__test__/repositories/InMemoryUsersRepository";
import { CreateUser } from "./createUser";
import { FindUser } from "./findUser";

describe("Get User by ID", () => {
  it("Should be able to get a user by ID", async () => {
    const inMemoryUserRepository = new InMemoryUsersReposotiry();
    const getUser = new FindUser(inMemoryUserRepository);
    const createUser = new CreateUser(inMemoryUserRepository);

    const userFactory = UserFactory();

    await createUser.execute(userFactory);

    await getUser.execute(userFactory.id);

    expect(inMemoryUserRepository.users[0].id).toEqual(userFactory.id);
  });
})