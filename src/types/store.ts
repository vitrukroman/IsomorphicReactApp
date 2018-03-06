import Auth from "./auth";
import IUser from "./user";

interface IStore {
  admins: IUser[];
  users: IUser[];
  auth: Auth;
}

export default IStore;
