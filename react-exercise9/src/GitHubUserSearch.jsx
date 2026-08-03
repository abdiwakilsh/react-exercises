import { useState } from "react";

function GitHubUserSearch() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  async function searchUser() {
    setError("");
    setUser(null);

    try {
      const response = await fetch(
        `https://api.github.com/users/${username}`
      );

      if (!response.ok) {
        throw new Error("GitHub user not found");
      }

      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div>
      <h1>GitHub User Search</h1>

      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={searchUser}>Search</button>

      {error && <p>{error}</p>}

      {user && (
        <div>
          <h2>{user.name || user.login}</h2>

          <img
            src={user.avatar_url}
            alt={user.login}
            width="200"
          />

          <p>
            <strong>Location:</strong> {user.location || "N/A"}
          </p>

          <p>
            <strong>Public Repos:</strong> {user.public_repos}
          </p>
        </div>
      )}
    </div>
  );
}

export default GitHubUserSearch;