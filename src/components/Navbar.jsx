import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>SupportDesk</div>

      <div style={styles.links}>
        {!token ? (
          <>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/register" style={styles.primaryBtn}>Register</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" style={styles.link}>Dashboard</Link>
            <button onClick={handleLogout} style={styles.logoutBtn}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 40px",
    borderBottom: "1px solid #e5e7eb",
    backgroundColor: "#ffffff"
  },
  logo: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#2563eb"
  },
  links: {
    display: "flex",
    gap: "16px",
    alignItems: "center"
  },
  link: {
    textDecoration: "none",
    color: "#0f172a",
    fontWeight: "500"
  },
  primaryBtn: {
    textDecoration: "none",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    padding: "8px 16px",
    borderRadius: "6px",
    fontWeight: "500"
  },
  logoutBtn: {
    background: "none",
    border: "none",
    color: "#ef4444",
    cursor: "pointer",
    fontWeight: "500"
  }
};

export default Navbar;