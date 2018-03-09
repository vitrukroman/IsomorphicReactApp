import React from "react";
import { Helmet } from "react-helmet";
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
    this.state = {
      result: 0,
    };

    if (typeof window === "object" && (window as any).Worker) {
      this.initWorker();
    }
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
        {this.state.result}
        <ul>
          {this.renderUsersList()}
        </ul>
      </div>
    );
  }

  private initWorker() {
    const worker = new Worker("calculateSomeData.js");
    worker.onmessage = (ev: MessageEvent) => {
      console.log("RECEIVED", ev);
      this.setState({
        result: ev.data,
      });
    };

    worker.postMessage(this.state.result);
  }
}

export default UsersList;
