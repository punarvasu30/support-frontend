import React, { useState } from "react";
import { createTicket } from "../api/ticketApi";
import { useNavigate } from "react-router-dom";

export default function CreateTicket() {
  const navigate = useNavigate();
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("MEDIUM");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await createTicket({ subject, description, priority });
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Support Ticket</h2>
        <p style={styles.subtitle}>
          Describe your issue and we'll help you out.
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.group}>
            <label style={styles.label}>Subject</label>
            <input
              type="text"
              placeholder="Brief summary of the issue"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.group}>
            <label style={styles.label}>Description</label>
            <textarea
              placeholder="Provide more details here..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              style={{ ...styles.input, height: "120px", resize: "none" }}
            />
          </div>

          <div style={styles.group}>
            <label style={styles.label}>Priority</label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              style={styles.input}
            >
              <option value="LOW">Low</option>
              <option value="MEDIUM">Medium</option>
              <option value="HIGH">High</option>
            </select>
          </div>

          <button type="submit" disabled={loading} style={styles.button}>
            {loading ? "Submitting..." : "Create Ticket"}
          </button>

          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            style={styles.cancelBtn}
          >
            Cancel
          </button>
        </form>

        {error && <p style={styles.errorText}>{error}</p>}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8fafc",
    padding: "20px",
  },
  card: {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
    width: "100%",
    maxWidth: "500px",
  },
  title: { margin: "0 0 8px 0", fontSize: "24px", color: "#1e293b" },
  subtitle: { margin: "0 0 24px 0", color: "#64748b", fontSize: "14px" },
  form: { display: "flex", flexDirection: "column", gap: "20px" },
  group: { display: "flex", flexDirection: "column", gap: "8px" },
  label: { fontSize: "14px", fontWeight: "600", color: "#475569" },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    fontSize: "16px",
    outline: "none",
  },
  button: {
    padding: "14px",
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "10px",
  },
  cancelBtn: {
    padding: "10px",
    backgroundColor: "transparent",
    color: "#64748b",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
  },
  errorText: {
    color: "#dc2626",
    fontSize: "14px",
    textAlign: "center",
    marginTop: "15px",
  },
};
