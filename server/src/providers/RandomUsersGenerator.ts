import axios from "axios";
import RandomUser from "../entities/RandomUser";
import RandomUsersRepository from "../repositories/RandomUsersRepository";

interface RandomUserResponse {
  picture: {
    large: string;
  };
  name: {
    first: string;
    last: string;
  };
  email: string;
  login: {
    username: string;
  };
  dob: {
    age: number;
  };
}

class RandomUsersGenerator implements RandomUsersRepository {
  async getUsers(size: number): Promise<RandomUser[]> {
    const { data } = await axios.get(`https://randomuser.me/api/?results=${size}`);

    const response = data.map((user: RandomUserResponse) => {
      const { picture, name, email, login, dob } = user;
      const { first, last } = name;
      const { username } = login;
      const { age } = dob;
      const { large } = picture;
    
      const userMapper = new RandomUser({
        picture: large,
        name: `${first} ${last}`,
        email,
        username,
        age,
      });

      return userMapper;
    });

    return response;
  }
}

export default RandomUsersGenerator;