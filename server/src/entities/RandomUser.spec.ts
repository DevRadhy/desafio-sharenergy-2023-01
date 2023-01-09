import RandomUser from "./RandomUser";

describe("RandomUser", () => {
  it("Should be able to create a instance of RandomUser", () => {
    const randomUserGenerator = new RandomUser({
      picture: "profile picture",
      name: "John Doe",
      email: "john@mail.com",
      username: "john",
      age: 30,
    });

    expect(randomUserGenerator).toBeTruthy();
  });
})