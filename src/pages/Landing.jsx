// import { Link } from "react-router-dom";

// export default function Landing() {
//   return (
//     <div style={styles.page}>
//       {/* Navbar */}
//       <nav style={styles.nav}>
//         <div style={styles.navContainer}>
//           <div style={styles.logo}>SupportDesk</div>
//           <div style={styles.links}>
//             <Link to="/login" style={styles.linkButton}>
//               Login
//             </Link>
//             <Link to="/register" style={styles.primaryButton}>
//               Get Started
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section style={styles.hero}>
//         <div style={styles.container}>
//           <h1 style={styles.title}>Modern Support Ticketing System</h1>
//           <p style={styles.subtitle}>
//             Create, track, and resolve support tickets with secure
//             authentication and role-based access.
//           </p>
//           <div style={styles.heroButtons}>
//             <Link to="/register" style={styles.primaryButtonLarge}>
//               Get Started
//             </Link>
//             <Link to="/login" style={styles.secondaryButtonLarge}>
//               Login
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Features Grid */}
//       <section style={styles.features}>
//         <div style={styles.container}>
//           <div style={styles.featureGrid}>
//             {[
//               {
//                 icon: "🔒",
//                 title: "Secure Authentication",
//                 text: "JWT-based authentication protected by an API Gateway.",
//               },
//               {
//                 icon: "👥",
//                 title: "Role-Based Access",
//                 text: "Users, reviewers, and admins with clearly defined permissions.",
//               },
//               {
//                 icon: "⚡",
//                 title: "Scalable Backend",
//                 text: "Microservices architecture ready for growth.",
//               },
//             ].map((feature, index) => (
//               <div
//                 key={index}
//                 style={styles.featureCard}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = "translateY(-6px)";
//                   e.currentTarget.style.boxShadow =
//                     "0 12px 40px rgba(37,99,235,0.15)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = "translateY(0)";
//                   e.currentTarget.style.boxShadow =
//                     "0 4px 20px rgba(0,0,0,0.05)";
//                 }}
//               >
//                 <div style={styles.featureIcon}>{feature.icon}</div>
//                 <h3 style={styles.featureTitle}>{feature.title}</h3>
//                 <p style={styles.featureText}>{feature.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// const styles = {
//   page: {
//     fontFamily: "system-ui, -apple-system, sans-serif",
//     background: "linear-gradient(to bottom, #f8fafc 0%, #e0f2fe 100%)",
//     minHeight: "100vh",
//     color: "#1e293b",
//     width: "100vw", // Use viewport width
//     margin: 0,
//     padding: 0,
//     overflowX: "hidden",
//   },
//   nav: {
//     backgroundColor: "#ffffff",
//     borderBottom: "1px solid #e5e7eb",
//     padding: "0 40px",
//     position: "sticky",
//     top: 0,
//     zIndex: 1000,
//     width: "100%",
//     boxSizing: "border-box",
//   },
//   navContainer: {
//     width: "100%",
//     maxWidth: "1200px",
//     margin: "0 auto", // THE FIX: Distributes space equally on left and right
//     height: "70px",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "0 24px",
//   },
//   logo: {
//     fontWeight: "800",
//     fontSize: "24px",
//     color: "#2563eb",
//   },
//   links: {
//     display: "flex",
//     gap: "20px",
//     alignItems: "center",
//   },
//   container: {
//     width: "100%",
//     maxWidth: "1200px",
//     margin: "0 auto", // THE FIX: Centers the hero and feature cards
//     padding: "0 24px",
//     boxSizing: "border-box",
//   },
//   hero: {
//     padding: "100px 0 80px",
//     textAlign: "center",
//     width: "100%",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center", // Ensures the title box itself is centered
//   },
//   title: {
//     fontSize: "clamp(40px, 8vw, 72px)", // Larger font for better "stretch"
//     fontWeight: "800",
//     lineHeight: "1.1",
//     marginBottom: "24px",
//     color: "#0f172a",
//     maxWidth: "900px", // Prevents text from becoming one giant long line
//   },
//   subtitle: {
//     fontSize: "clamp(18px, 2.5vw, 22px)",
//     color: "#475569",
//     maxWidth: "750px",
//     margin: "0 auto 48px",
//     lineHeight: "1.6",
//   },
//   heroButtons: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "16px",
//     width: "100%",
//   },
//   primaryButton: {
//     padding: "10px 20px",
//     backgroundColor: "#2563eb",
//     color: "#ffffff",
//     borderRadius: "8px",
//     textDecoration: "none",
//     fontWeight: "600",
//   },
//   primaryButtonLarge: {
//     padding: "16px 36px",
//     backgroundColor: "#2563eb",
//     color: "#ffffff",
//     borderRadius: "12px",
//     textDecoration: "none",
//     fontWeight: "600",
//     fontSize: "18px",
//     boxShadow: "0 10px 15px -3px rgba(37, 99, 235, 0.3)",
//   },
//   secondaryButtonLarge: {
//     padding: "16px 36px",
//     backgroundColor: "#ffffff",
//     border: "1px solid #cbd5e1",
//     color: "#334155",
//     borderRadius: "12px",
//     textDecoration: "none",
//     fontWeight: "600",
//     fontSize: "18px",
//   },
//   linkButton: {
//     textDecoration: "none",
//     color: "#475569",
//     fontWeight: "600",
//   },
//   features: {
//     padding: "80px 0",
//     width: "100%",
//   },
//   featureGrid: {
//     display: "grid",
//     // This allows cards to stretch and fill the wide space
//     gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
//     gap: "30px",
//     width: "100%",
//   },
//   featureCard: {
//     backgroundColor: "#ffffff",
//     padding: "40px",
//     borderRadius: "20px",
//     boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
//     border: "1px solid #f1f5f9",
//     textAlign: "left",
//     transition: "transform 0.3s ease",
//     display: "flex",
//     flexDirection: "column",
//     height: "100%", // Ensures cards are same height in the row
//   },
//   featureTitle: {
//     fontSize: "22px",
//     fontWeight: "700",
//     marginBottom: "14px",
//     color: "#1e293b",
//   },
//   featureText: {
//     color: "#64748b",
//     lineHeight: "1.6",
//     fontSize: "16px",
//   },
//   featureIcon: {
//     fontSize: "48px",
//     marginBottom: "20px",
//   },
// };

import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div style={styles.page}>
      {/* Navbar */}
      <nav style={styles.nav}>
        <div style={styles.logo}>SupportDesk</div>

        <div style={styles.links}>
          <Link to="/login" style={styles.linkButton}>
            Login
          </Link>
          <Link to="/register" style={styles.primaryButton}>
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 style={styles.title}>Modern Support Ticketing System</h1>

          <p style={styles.subtitle}>
            Create, track, and resolve support tickets with secure
            authentication and role-based access.
          </p>

          <div style={styles.heroButtons}>
            <Link to="/register" style={styles.primaryButton}>
              Get Started
            </Link>
            <Link to="/login" style={styles.secondaryButton}>
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={styles.features}>
        <div style={styles.container}>
          <div style={styles.featureGrid}>
            <div style={styles.featureCard}>
              <h3>Secure Authentication</h3>
              <p>JWT-based authentication protected by an API Gateway.</p>
            </div>

            <div style={styles.featureCard}>
              <h3>Role-Based Access</h3>
              <p>
                Users, reviewers, and admins with clearly defined permissions.
              </p>
            </div>

            <div style={styles.featureCard}>
              <h3>Scalable Backend</h3>
              <p>Microservices architecture ready for growth.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    backgroundColor: "#f8fafc",
    minHeight: "100vh",
  },

  /* Navbar */
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 24px",
    borderBottom: "1px solid #e5e7eb",
    backgroundColor: "#ffffff",
    flexWrap: "wrap",
  },
  logo: {
    fontWeight: "700",
    fontSize: "20px",
    color: "#2563eb",
  },
  links: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
    flexWrap: "wrap",
  },

  /* Hero */
  hero: {
    padding: "80px 0",
    textAlign: "center",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 16px",
  },
  title: {
    fontSize: "clamp(28px, 5vw, 42px)",
    fontWeight: "700",
    color: "#0f172a",
  },
  subtitle: {
    marginTop: "16px",
    fontSize: "clamp(16px, 2.5vw, 18px)",
    color: "#475569",
    maxWidth: "700px",
    marginInline: "auto",
  },
  heroButtons: {
    marginTop: "32px",
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    flexWrap: "wrap",
  },

  /* Buttons */
  primaryButton: {
    padding: "12px 20px",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
  },
  secondaryButton: {
    padding: "12px 20px",
    border: "1px solid #2563eb",
    color: "#2563eb",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
    backgroundColor: "#ffffff",
  },
  linkButton: {
    padding: "10px 16px",
    textDecoration: "none",
    color: "#2563eb",
    fontWeight: "600",
  },

  /* Features */
  features: {
    padding: "60px 0",
  },
  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
  },
  featureCard: {
    backgroundColor: "#ffffff",
    padding: "24px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  },
};
