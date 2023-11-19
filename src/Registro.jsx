import React, { useState } from 'react';

const Registro = () => {
  const [usuario, setUsuario] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    contraseña: '',
    confirmarContraseña: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí es donde normalmente se realizarían las validaciones y se enviarían los datos al backend
    console.log(usuario); // Solo para demostración, puedes enviar esta información a tu backend
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          name="nombre"
          value={usuario.nombre}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Apellido"
          name="apellido"
          value={usuario.apellido}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          name="email"
          value={usuario.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          placeholder="Teléfono"
          name="telefono"
          value={usuario.telefono}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Contraseña"
          name="contraseña"
          value={usuario.contraseña}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Confirmar Contraseña"
          name="confirmarContraseña"
          value={usuario.confirmarContraseña}
          onChange={handleChange}
        />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Registro;
