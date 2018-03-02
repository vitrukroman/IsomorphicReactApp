import { connect, Dispatch } from "react-redux";
import { usersFetchAction } from "../actions/userActions";
import UsersListComponent from "../components/usersList";
import IStore from "../types/store";
import IUser from "../types/user";

interface IUsersListStateProps {
  users: IUser[];
}

interface IHeaderDispatchProps {
  fetchUsers: () => void;
}

const UsersList = connect<IUsersListStateProps, IHeaderDispatchProps, {}, IStore>(
  (state: IStore) => {
    return {
      users: state.users,
    };
  },
  (dispatch: Dispatch<IStore>) => {
    return {
      fetchUsers: () => dispatch(usersFetchAction()),
    };
  },
)(UsersListComponent);

export default UsersList;
