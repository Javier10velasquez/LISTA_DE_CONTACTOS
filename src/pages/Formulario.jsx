import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Formulario = () => {
  const [formularioDato, setFormularioDato] = useState({
    NombreCompleto: "",
    Email: "",
    Telefono: "",
    Direccion: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormularioDato({
      ...formularioDato,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dato enviado:", formularioDato);
    
  };

  return (
    <div className="form-wrapper">
      <h1>Add New Contact</h1>

      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          name="NombreCompleto"
          className="formulario-contenedor"
          value={formularioDato.NombreCompleto}
          onChange={(e) => handleChange(e)}
        />

        <label>Email</label>
        <input
          type="email"
          name="Email"
          className="formulario-contenedor"
          value={formularioDato.Email}
          onChange={handleChange}
        />

        <label>Phone</label>
        <input
          type="text"
          name="Telefono"
          className="formulario-contenedor"
          value={formularioDato.Telefono}
          onChange={handleChange}
        />

        <label>Address</label>
        <input
          type="text"
          name="Direccion"
          className="formulario-contenedor"
          value={formularioDato.Direccion}
          onChange={handleChange}
        />

        <button type="submit">save</button>
      </form>

      <a href="/contacts" className="back-link">
        or get back to contacts
      </a>
    </div>
  );
};

export default Formulario;
