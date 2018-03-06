import IUser from "./user";

class Auth {
  constructor(
    public checked = false,
    public user: IUser | null = null,
  ) {
  }
}

export default Auth;
