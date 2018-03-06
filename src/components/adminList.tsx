import React from "react";
import RequireAuth from "../containers/requireAuth";
import UsersList from "./usersList";

class AdminList extends UsersList {
  public render() {
    return (
      <RequireAuth>
        {super.render()}
      </RequireAuth>
    );
  }
}

export default AdminList;
