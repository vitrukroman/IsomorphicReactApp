import { connect, Dispatch } from "react-redux";
import { IUserCurrentFetchAction, userCurrentFetchAction } from "../actions/userActions";
import HeaderComponent from "../components/header/header";
import Auth from "../types/auth";
import IStore from "../types/store";

interface IHeaderStateProps {
  auth: Auth;
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
  (dispath: Dispatch<IUserCurrentFetchAction>) => {
    return {
      fetchCurrentUser: () => dispath(userCurrentFetchAction()),
    };
  },
)(HeaderComponent);

export default Header;
