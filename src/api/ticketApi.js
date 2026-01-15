const API_BASE = "https://api-gateway-service-kfn2.onrender.com";

function authHeader() {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json" ,
    "Authorization": `Bearer ${token}`,
  };
}

// Create ticket
export async function createTicket(ticket) {
  const res = await fetch(`${API_BASE}/support/tickets`, {
    method: "POST",
    headers: authHeader(),
    body: JSON.stringify(ticket),
  });

  if (!res.ok) {
    throw new Error("Failed to create ticket");
  }

  return res.json();
}

// Get logged-in user's tickets
export async function getMyTickets() {
  const res = await fetch(`${API_BASE}/support/my-tickets`, {
    headers: authHeader(),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch tickets");
  }

  return res.json();
}
