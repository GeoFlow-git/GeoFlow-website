import { useState, useEffect } from "react";
import { getProfile } from "../utils/auth";
import "./Perfil.css"; // Estilos del perfil

function Perfil() {
  const [userData, setUserData] = useState(null);
  const [editable, setEditable] = useState(false);
  const [message, setMessage] = useState("");

  // Cargar datos del usuario al montar el componente
  useEffect(() => {
    async function fetchUser() {
      try {
        const data = await getProfile();
        setUserData(data);
      } catch (err) {
        setMessage(`❌ ${err.message}`);
      }
    }
    fetchUser();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleEditToggle = () => {
    setEditable(!editable);
    setMessage("");
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/auth/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Error al actualizar usuario");
      }

      const updatedUser = await response.json();
      setUserData(updatedUser);
      setEditable(false);
      setMessage("✅ Información actualizada correctamente");
    } catch (err) {
      setMessage(`❌ ${err.message}`);
    }
  };

  if (!userData) return <p>Cargando información...</p>;

  return (
    <div className="perfil-container">
      <h2 className="text-center mb-4">Mi perfil</h2>
      <div className="perfil-card">
        {message && <p className="text-center">{message}</p>}

        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            value={userData.nombre}
            onChange={handleChange}
            disabled={!editable}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Apellidos</label>
          <input
            type="text"
            name="apellidos"
            className="form-control"
            value={userData.apellidos}
            onChange={handleChange}
            disabled={!editable}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Nombre de usuario</label>
          <input
            type="text"
            name="username"
            className="form-control"
            value={userData.username}
            onChange={handleChange}
            disabled={!editable}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={userData.email}
            onChange={handleChange}
            disabled={!editable}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="********"
            onChange={handleChange}
            disabled={!editable}
          />
        </div>

        <div className="d-flex justify-content-between mt-4">
          {!editable ? (
            <button className="btn btn-primary" onClick={handleEditToggle}>
              Editar
            </button>
          ) : (
            <>
              <button className="btn btn-secondary" onClick={handleEditToggle}>
                Cancelar
              </button>
              <button className="btn btn-success" onClick={handleUpdate}>
                Actualizar
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Perfil;
