const FooAPICallComponent = async () => {
  console.log("foo example of api call");

  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const users = await response.json();

  console.log("in foo pages", users);
  return (
    <div>
      <h1>Users List</h1>
      <p>pageTesting</p>
      <ul>
        {users.map((user: { id: number; name: string }) => (
          <li key={user.id}>
            <h3>{user.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooAPICallComponent;
