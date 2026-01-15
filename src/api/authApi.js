const AUTH_BASE_URL = "https://auth-service-gztr.onrender.com/auth";

export async function registerUser(name, email, password) {
  const response = await fetch(`${AUTH_BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || "Registration failed");
  }

  return response.json();
}

export async function loginUser(email, password) {
  const response = await fetch(`${AUTH_BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || "Login failed");
  }

  const token = await response.text();
  localStorage.setItem("token", token);

  return token;
}
