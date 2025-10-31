import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css"; // puedes crear este archivo para personalizar estilos

function Register() {
  // Estado local para manejar los campos del formulario
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  // Maneja los cambios de los inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Envía el formulario (por ahora solo muestra los datos en consola)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
    alert(`Usuario registrado: ${formData.username}`);
  };

  return (
    <div className="register-container">
      <div className="register-card">
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

          {/* Botón de registro */}
          <button type="submit" className="btn btn-primary w-100">
            Registrarse
          </button>
        </form>

        {/* Enlaces de ayuda */}
        <div className="text-center mt-3">
          <Link to="/login" className="small-link">
            ¿No tiened una cuenta? Registrate
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

export default Register;
