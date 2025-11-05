const API_URL = "http://127.0.0.1:8000/auth";

// Registro
export async function registerUser(formData) {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || "Error en el registro");
  }
  return response.json();
}

// Login
export async function loginUser(username, password) {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || "Error en el login");
  }

  const data = await response.json();

  if (data.access_token) {
    localStorage.setItem("token", data.access_token);
    localStorage.setItem("username", username);
  }

  return data;
}

// Perfil
export async function getProfile() {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || "Error al obtener perfil");
  }
  return response.json();
}

// Helpers
export function isLoggedIn() {
  return !!localStorage.getItem("token");
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
}
