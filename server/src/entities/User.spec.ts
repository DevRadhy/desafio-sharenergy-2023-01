import User from "./User";

describe("User Entity", () => {
  it("Should be able to create a instance of User", () => {
    const user = new User({
      name: "John Doe",
      email: "john@mai.com",
      phone: "+0 (00) 0 0000-0000",
      adress: "123 Street",
      cpf: "000.000.000-00"
    });

    expect(user).toBeTruthy();
  });
})