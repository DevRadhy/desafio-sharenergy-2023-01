import { UserFactory } from "../__tests__/factories/UserFactory";
import InMemoryUsersReposotiry from "../__tests__/repositories/InMemoryUsersRepository";
import { CreateUser } from "./createUser";
import { DeleteUser } from "./deleteUser";

describe("Delete User", () => {
  it("Should be able to delete a user", async () => {
    const inMemoryUserRepository = new InMemoryUsersReposotiry();
    const deleteUser = new DeleteUser(inMemoryUserRepository);
    const createUser = new CreateUser(inMemoryUserRepository);

    const userFactory = UserFactory();

    await createUser.execute(userFactory);

    await deleteUser.execute(userFactory.id);

    expect(inMemoryUserRepository.users.length).toEqual(0);
  });

  it("Should not be able to delete a non exits user.", async () => {
    const inMemoryUserRepository = new InMemoryUsersReposotiry();
    const deleteUser = new DeleteUser(inMemoryUserRepository);

    expect(() => {
      return deleteUser.execute("fake-user-id");
    }).rejects.toThrow(Error);
  });
})