import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Iniciar_sesion.css";
import { loginUser } from "../utils/auth";

function Iniciar_sesion() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: false,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(formData.username, formData.password);

      // Guardar username en localStorage para Navbar
      localStorage.setItem("username", formData.username);

      // Redirigir a home y actualizar Navbar
      navigate("/");
      window.dispatchEvent(new Event("storage"));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="Iniciar-container">
      <div className="Iniciar-card">
        <h2 className="text-center mb-4">Iniciar sesión</h2>

        <form onSubmit={handleSubmit}>
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

          <button type="submit" className="btn btn-primary w-100">
            Iniciar sesión
          </button>
        </form>

        {error && <p className="mt-3 text-center text-danger">{error}</p>}

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
