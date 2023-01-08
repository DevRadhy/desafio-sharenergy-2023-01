class User {
  id: string;
  name: string;
  email: string;
  phone: string;
  adress: string;
  cpf: string;

  constructor(props: User) {
    Object.assign(this, props);
  }
}

export default User;