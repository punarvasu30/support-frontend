import { getUserFromToken } from "../auth/JwtUtils";


export default function Dashboard() {
  const user = getUserFromToken();

  if (!user) {
    return <p>Unauthorized</p>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Dashboard</h1>

      <p>
        <strong>Email:</strong> {user.sub}
      </p>

      <p>
        <strong>Role:</strong> {user.role}
      </p>

      <hr />

      {user.role === "USER" && <p>👤 User Dashboard</p>}
      {user.role === "ADMIN" && <p>🛠 Admin Dashboard</p>}
      {user.role === "REVIEWER" && <p>🎧 Reviewer Dashboard</p>}
    </div>
  );
}