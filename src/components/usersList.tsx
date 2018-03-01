import React from "react";
import IUser from "../types/user";

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

  public render() {
    return (
      <ul>
        {this.renderUsersList()}
      </ul>
    );
  }
}

export default UsersList;
