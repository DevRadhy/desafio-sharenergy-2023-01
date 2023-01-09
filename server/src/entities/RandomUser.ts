class RandomUser {
  picture: string;
  name: string;
  email: string;
  username: string;
  age: number;

  constructor(props: RandomUser) {
    Object.assign(this, props);
  }
}

export default RandomUser;