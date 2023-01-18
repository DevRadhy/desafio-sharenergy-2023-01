import { UserFactory } from "../../__tests__/factories/UserFactory";
import InMemoryUsersReposotiry from "../../__tests__/repositories/InMemoryUsersRepository";
import { CreateUser } from "./createUser";
import { UpdateUser } from "./updateUser";

describe("Update User", () => {
  it("Should be able to update a user information.", async () => {
    const inMemoryUserRepository = new InMemoryUsersReposotiry();
    const updateUser = new UpdateUser(inMemoryUserRepository);
    const createUser = new CreateUser(inMemoryUserRepository);

    const userFactory = UserFactory({ email: "john@mail.com" });

    await createUser.execute(userFactory);

    await updateUser.execute({
      ...userFactory,
      email: "john.doe@mail.com"
    });

    expect(inMemoryUserRepository.users[0].email).toEqual("john.doe@mail.com");
  });
})