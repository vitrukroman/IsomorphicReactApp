class ApiService {
  public async fetchUsers() {
    const response = await fetch("http://react-ssr-api.herokuapp.com/users");
    const json = await response.json();
    console.log(json);
    return json;
  }
}

export default ApiService;
