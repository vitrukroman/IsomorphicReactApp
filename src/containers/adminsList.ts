import { connect, Dispatch } from "react-redux";
import { adminsFetchAction, IAdminsFetchAction } from "../actions/adminActions";
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
  (dispatch: Dispatch<IAdminsFetchAction>) => {
    return {
      fetchUsers: () => dispatch(adminsFetchAction()),
    };
  },
)(AdminListComponent);

export default AdminsList;
