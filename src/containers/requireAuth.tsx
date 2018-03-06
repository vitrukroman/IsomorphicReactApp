import { connect } from "react-redux";
import RequireAuthComponent from "../components/requireAuth";
import IStore from "../types/store";

interface IRequireAuthStateProps {
  isAuthenticated: boolean;
}

const RequireAuth = connect<IRequireAuthStateProps, {}, {}, IStore>(
  (state: IStore) => {
    return {
      isAuthenticated: state.auth.checked && Boolean(state.auth.user),
    };
  },
)(RequireAuthComponent);

export default RequireAuth;
