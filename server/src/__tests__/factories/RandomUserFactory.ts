import RandomUser from "../../entities/RandomUser";

type Override = Partial<RandomUser>;

export function RandomUserFactory(props: Override = {}): RandomUser {
  return {
    picture: "picture",
    name: "John Doe",
    email: "john@mail.com",
    username: "john",
    age: 30,
    ...props,
  }
}