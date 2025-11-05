// src/pages/Register.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { registerUser } from "../utils/auth";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptedTerms: false,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("⚠️ Las contraseñas no coinciden");
      return;
    }

    if (!formData.acceptedTerms) {
      setMessage("⚠️ Debes aceptar las políticas de privacidad");
      return;
    }

    try {
      // Enviar TODOS los datos al backend
      const response = await registerUser(formData);

      // Guardar el username en localStorage
      localStorage.setItem("username", formData.username);

      // Disparar evento para que Navbar se actualice
      window.dispatchEvent(new Event("storage"));

      setMessage("✅ Registro exitoso. Redirigiendo...");

      // Redirigir a home
      setTimeout(() => navigate("/"), 1500);
    } catch (error) {
      setMessage(`❌ ${error.message}`);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="text-center mb-4">Crear cuenta</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="form-control"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="apellidos" className="form-label">
              Apellidos
            </label>
            <input
              type="text"
              id="apellidos"
              name="apellidos"
              className="form-control"
              value={formData.apellidos}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Nombre de usuario
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

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

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

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirmar contraseña
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="form-control"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              id="acceptedTerms"
              name="acceptedTerms"
              className="form-check-input"
              checked={formData.acceptedTerms}
              onChange={handleChange}
              required
            />
            <label htmlFor="acceptedTerms" className="form-check-label">
              Acepto las{" "}
              <Link to="/politicas" className="text-primary">
                políticas de privacidad
              </Link>
            </label>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Registrarse
          </button>
        </form>

        {message && <p className="mt-3 text-center">{message}</p>}

        <div className="text-center mt-3">
          <Link to="/Iniciar_sesion" className="small-link">
            ¿Ya tienes una cuenta? Inicia sesión
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
