import IUser from "./user";

interface IStore {
  admins: IUser[];
  users: IUser[];
  auth: IUser | null;
}

export default IStore;
