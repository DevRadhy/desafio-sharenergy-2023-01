import User from "../../entities/User";

type Override = Partial<User>;

export function UserFactory(props: Override = {}): User {
  return {
    id: "user-id",
    name: "John Doe",
    email: "john@mail.com",
    phone: "123456789",
    adress: "123 Street",
    cpf: "123456789",
    ...props,
  }
}