import { connect, Dispatch } from "react-redux";
import { userCurrentFetchAction } from "../actions/userActions";
import HeaderComponent from "../components/header";
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
  (dispath: Dispatch<IStore>) => {
    return {
      fetchCurrentUser: () => dispath(userCurrentFetchAction()),
    };
  },
)(HeaderComponent);

export default Header;
