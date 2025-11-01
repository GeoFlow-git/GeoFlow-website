//auth.jsx → funciones relacionadas con autenticación (login, register, obtener perfil, JWT).
// src/utils/auth.jsx
const API_URL = "http://127.0.0.1:8000/auth"; // Ruta base del backend

// ------------------ Registro ------------------
export async function registerUser(username, password) {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || "Error en el registro");
  }

  return response.json();
}

// ------------------ Login ------------------
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

  // Guardar token y username en localStorage
  if (data.access_token) {
    localStorage.setItem("token", data.access_token);
    localStorage.setItem("username", username); // <--- guardamos el nombre aquí
  }

  return data;
}

// ------------------ Perfil ------------------
export async function getProfile() {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || "Error al obtener perfil");
  }

  return response.json();
}

// ------------------ Helpers ------------------
export function isLoggedIn() {
  const token = localStorage.getItem("token");
  return !!token;
}

export function logout() {
  localStorage.removeItem("token");
}
