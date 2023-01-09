interface RandomUserProps {
  picture: string;
  name: string;
  email: string;
  username: string;
  age: number;
}

class RandomUser {
  pros: RandomUserProps;

  constructor(props: RandomUserProps) {
    Object.assign(this, props);
  }
}

export default RandomUser;