type UserProps = {
  name: string;
  email: string;
  password: string;
  admin: boolean;
};

export class User {
  public name: string;
  public email: string;
  public password: string;
  public admin: boolean;

  constructor({ name, email, password, admin }: UserProps) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.admin = admin;
  }
}
