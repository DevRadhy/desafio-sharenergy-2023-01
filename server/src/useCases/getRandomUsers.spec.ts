import InMemoryRandomUsersRepository from "../__tests__/repositories/InMemoryRandomUsersRepository";
import { GetRandomUsers } from "./getRandomUsers";

describe("Get Random Users", () => {
  it("Should return a list of users", async () => {
    const randomUsersRepository = new InMemoryRandomUsersRepository();
    const getRandomUsers = new GetRandomUsers(randomUsersRepository);

    const users = await getRandomUsers.execute(2);

    expect(users.length).toEqual(2);
    });
})