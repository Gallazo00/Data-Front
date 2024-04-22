import React, { useRef } from 'react';
import '../../assets/css/EstilosFormulario.css';
import LogoRSP from '../../assets/img/LogoRSP.png';
import DiaEducadora from '../../assets/img/DiaEducadora.png'

function Formulario() {
  const formRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch('http://44.221.150.42:3000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-content">
          <form ref={formRef} onSubmit={handleSubmit}>
            <h1>Nombre Completo:</h1>
            <input type="text" name="NombrePersona" required />
            <h1>Edad:</h1>
            <input type="number" name="edad" required />
            <h1>Número de Teléfono:</h1>
            <input type="tel" name="numeroTelefono" required />
            <h1>Usuario de Facebook:</h1>
            <input type="text" name="UsuFacebook" required />
            <h1>Sexo:</h1>
            <select name="sexo" required>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </select>
            <button type="submit">Confirmar</button>
          </form>
        </div>
      </div>

      <div className="logos-section">
        <img src={DiaEducadora} alt="Logo RSP" />
      </div>
    </div>
  );
}

export default Formulario;
