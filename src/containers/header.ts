import { connect, Dispatch } from "react-redux";
import { userCurrentFetchAction } from "../actions/userActions";
import HeaderComponent from "../components/header";
import IStore from "../types/store";
import IUser from "../types/user";

interface IHeaderStateProps {
  auth: IUser | null;
}

interface IHeaderDispatchProps {
  fetchCurrentUser: () => void;
}

const Header = connect<IHeaderStateProps, IHeaderDispatchProps, {}, IStore>(
  (state: IStore) => {
    return {
      auth: state.auth,
    };
  },
  (dispath: Dispatch<IStore>) => {
    return {
      fetchCurrentUser: () => dispath(userCurrentFetchAction()),
    };
  },
)(HeaderComponent);

export default Header;
