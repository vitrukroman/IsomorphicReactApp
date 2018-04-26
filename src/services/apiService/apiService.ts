class ApiService {
  constructor(private resource?: string,
              private cookie: any = "") {
    if (!resource) {
      throw new Error("API_URL was not provided");
    }
  }

  public fetchUsers = async () => {
    const response = await fetch(`${this.resource}users`);
    const json = await response.json();

    return json;
  }

  public fetchAdmins = async () => {
    const response = await fetch(`${this.resource}admins`, {
      credentials: "same-origin",
      headers: {
        cookie: this.cookie,
      },
    });
    const json = await response.json();

    return json;
  }

  public fetchCurrentUser = async () => {
    const response = await fetch(`${this.resource}current_user`, {
      credentials: "same-origin",
      headers: {
        cookie: this.cookie,
      },
    });
    const json = await response.json();

    return json;
  }
}

export default ApiService;
