import IUser from "./user";

interface IStore {
  users: IUser[];
  auth: IUser | null;
}

export default IStore;
