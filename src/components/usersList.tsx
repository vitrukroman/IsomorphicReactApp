import React from "react";
import {Helmet} from "react-helmet";
import IUser from "../types/user";

interface IUsersListProps {
  users: IUser[];
  fetchUsers: () => void;
}

interface IUsersListState {
  result: number;
}

class UsersList extends React.Component<IUsersListProps, IUsersListState> {
  constructor(props: IUsersListProps) {
    super(props);

    this.props.fetchUsers();
  }

  public renderUsersList() {
    return this.props.users.map((user: IUser) => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  public head() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} users loaded`}</title>
        <meta property="og:title" content="Users App"/>
      </Helmet>
    );
  }

  public render() {
    return (
      <React.Fragment>
        {this.head()}
        <ul>
          {this.renderUsersList()}
        </ul>
      </React.Fragment>
    );
  }
}

export default UsersList;
