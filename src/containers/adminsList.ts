import { connect, Dispatch } from "react-redux";
import { adminsFetchAction } from "../actions/adminActions";
import AdminListComponent from "../components/adminList";
import IStore from "../types/store";
import IUser from "../types/user";

interface IAdminsListStateProps {
  users: IUser[];
}

interface IHeaderDispatchProps {
  fetchUsers: () => void;
}

const AdminsList = connect<IAdminsListStateProps, IHeaderDispatchProps, {}, IStore>(
  (state: IStore) => {
    return {
      users: state.admins,
    };
  },
  (dispatch: Dispatch<IStore>) => {
    return {
      fetchUsers: () => dispatch(adminsFetchAction()),
    };
  },
)(AdminListComponent);

export default AdminsList;
