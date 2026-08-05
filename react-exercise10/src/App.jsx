import UserList from "./UserList";

function App() {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
    },
    {
      id: 3,
      name: "Ali Ahmed",
      email: "ali@example.com",
    },
  ];

  return (
    <div>
      <UserList users={users} />
    </div>
  );
}

export default App;