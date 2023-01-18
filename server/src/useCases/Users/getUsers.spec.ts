import { UserFactory } from "../../__tests__/factories/UserFactory";
import InMemoryUsersReposotiry from "../../__tests__/repositories/InMemoryUsersRepository";
import { CreateUser } from "./createUser";
import { GetUsers } from "./getUsers";

describe("Get All Users", () => {
  it("Should be able do get all users", async () => {
    const inMemoryUserRepository = new InMemoryUsersReposotiry();
    const getUsers = new GetUsers(inMemoryUserRepository);
    const createUser = new CreateUser(inMemoryUserRepository);

    const usersData = [
      UserFactory({ id: "user-01" }),
      UserFactory({ id: "user-02" }),
      UserFactory({ id: "user-03" })
    ];

    await createUser.execute(usersData[0]);
    await createUser.execute(usersData[1]);
    await createUser.execute(usersData[2]);

    const users = await getUsers.execute();

    expect(users.length).toEqual(3);
    expect(users).toEqual(expect.arrayContaining([
      expect.objectContaining({ id: "user-01" }),
      expect.objectContaining({ id: "user-03" }),
      expect.objectContaining({ id: "user-02" })
    ]));
  });
})