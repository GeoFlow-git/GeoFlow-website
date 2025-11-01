// src/pages/Iniciar_sesion.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Iniciar_sesion.css"; // Archivo para estilos del formulario
import { loginUser } from "../utils/auth"; // Función para login

function Iniciar_sesion() {
  const navigate = useNavigate();

  // Estado para manejar campos del formulario
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  // Estado para mostrar errores
  const [error, setError] = useState("");

  // Maneja cambios en los inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Envía el formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(formData.username, formData.password);

      // Guardar token y username en localStorage
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("username", formData.username);

      // Alerta de éxito
      alert("Inicio de sesión exitoso");

      // Redirigir a página principal
      navigate("/");
    } catch (err) {
      setError(err.message); // Mostrar error en pantalla
    }
  };

  return (
    <div className="Iniciar-container">
      <div className="Iniciar-card">
        <h2 className="text-center mb-4">Iniciar sesión</h2>

        <form onSubmit={handleSubmit}>
          {/* Usuario */}
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Usuario
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          {/* Contraseña */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Recordarme */}
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="form-check-input"
              checked={formData.remember}
              onChange={handleChange}
            />
            <label htmlFor="remember" className="form-check-label">
              Recordarme
            </label>
          </div>

          {/* Botón de login */}
          <button type="submit" className="btn btn-primary w-100">
            Iniciar sesión
          </button>
        </form>

        {/* Mostrar mensaje de error */}
        {error && <p className="mt-3 text-center text-danger">{error}</p>}

        {/* Enlaces de ayuda */}
        <div className="text-center mt-3">
          <Link to="/register" className="small-link">
            ¿No tienes una cuenta? Regístrate
          </Link>
          <br />
          <Link to="/forgot-password" className="small-link">
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Iniciar_sesion;
