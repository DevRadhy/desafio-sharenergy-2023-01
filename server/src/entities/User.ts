import { randomUUID } from 'crypto';

class User {
  id: string;
  name: string;
  email: string;
  phone: string;
  adress: string;
  cpf: string;

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props);

    if(!id) {
      this.id = randomUUID();
    }
  }
}

export default User;