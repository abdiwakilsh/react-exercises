import UserCard from "./UserCard";

const App = () => {
  return (
    <div>
      <UserCard
        name="John Doe"
        email="john.doe@example.com"
      />

      <UserCard
        name="Jane Smith"
        email="jane.smith@example.com"
      />

      <UserCard
        name="Alice Brown"
        email="alice.brown@example.com"
      />
    </div>
  );
};

export default App;