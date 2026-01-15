import React, { useEffect, useState } from "react";
import { getUserFromToken } from "../auth/jwtUtils";
import { getMyTickets } from "../api/ticketApi";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const user = getUserFromToken();
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      getMyTickets()
        .then((data) => {
          setTickets(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, []);

  if (!user) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <p>
          Unauthorized. Please <Link to="/login">Login</Link>
        </p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* User Info Section */}
      <div style={styles.profileCard}>
        <div>
          <h1 style={styles.welcomeText}>Welcome, {user.sub.split("@")[0]}</h1>
          <div style={styles.userMeta}>
            <span style={styles.metaItem}>
              <strong>Email:</strong> {user.sub}
            </span>
            <span style={styles.metaItem}>
              <strong>Role:</strong>
              <span style={styles.roleBadge}>{user.role}</span>
            </span>
          </div>
        </div>
        <Link to="/create-ticket">
          <button style={styles.createBtn}>+ New Ticket</button>
        </Link>
      </div>

      <hr style={styles.divider} />

      {/* Tickets Section */}
      <h2 style={styles.sectionTitle}>My Support Tickets</h2>

      {error && <div style={styles.errorBox}>{error}</div>}

      <div style={styles.ticketList}>
        {loading ? (
          <p>Loading tickets...</p>
        ) : tickets.length === 0 ? (
          <div style={styles.emptyState}>
            <p>You haven't created any tickets yet.</p>
          </div>
        ) : (
          tickets.map((ticket) => (
            <div key={ticket.id} style={styles.ticketCard}>
              <div style={styles.ticketMain}>
                <h3 style={styles.ticketSubject}>{ticket.subject}</h3>
                <p style={styles.ticketDesc}>{ticket.description}</p>
              </div>
              <div style={styles.ticketSide}>
                <span
                  style={{ ...styles.badge, ...getStatusColor(ticket.status) }}
                >
                  {ticket.status}
                </span>
                <span style={styles.priorityText}>
                  Priority: {ticket.priority}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const getStatusColor = (status) => {
  if (status === "OPEN")
    return { backgroundColor: "#e3f2fd", color: "#1976d2" };
  return { backgroundColor: "#f5f5f5", color: "#616161" };
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "0 20px",
    fontFamily: "system-ui, sans-serif",
  },
  profileCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  },
  welcomeText: { margin: 0, fontSize: "24px", color: "#1e293b" },
  userMeta: {
    display: "flex",
    gap: "20px",
    marginTop: "8px",
    color: "#64748b",
    fontSize: "14px",
  },
  roleBadge: {
    marginLeft: "5px",
    padding: "2px 8px",
    backgroundColor: "#f1f5f9",
    borderRadius: "4px",
    color: "#334155",
    fontWeight: "bold",
  },
  createBtn: {
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    padding: "12px 24px",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
  },
  divider: { margin: "30px 0", border: "none", borderTop: "1px solid #e2e8f0" },
  sectionTitle: { fontSize: "20px", marginBottom: "20px", color: "#1e293b" },
  ticketList: { display: "flex", flexDirection: "column", gap: "15px" },
  ticketCard: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "10px",
    border: "1px solid #e2e8f0",
  },
  ticketSubject: { margin: "0 0 5px 0", fontSize: "18px" },
  ticketDesc: { margin: 0, color: "#64748b", fontSize: "14px" },
  ticketSide: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "10px",
  },
  badge: {
    padding: "4px 12px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "bold",
  },
  priorityText: { fontSize: "12px", color: "#94a3b8" },
  errorBox: {
    padding: "15px",
    backgroundColor: "#fef2f2",
    color: "#dc2626",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  emptyState: {
    textAlign: "center",
    padding: "40px",
    backgroundColor: "#f8fafc",
    borderRadius: "10px",
    color: "#64748b",
  },
};
