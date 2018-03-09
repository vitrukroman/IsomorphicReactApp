import React from "react";
import IUser from "../types/user";
import { Helmet } from "react-helmet";


interface IUsersListProps {
  users: IUser[];
  fetchUsers: () => void;
}

class UsersList extends React.Component<IUsersListProps> {
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
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }

  public render() {
    return (
      <div>
        {this.head()}
        <ul>
          {this.renderUsersList()}
        </ul>
      </div>
    );
  }
}

export default UsersList;
