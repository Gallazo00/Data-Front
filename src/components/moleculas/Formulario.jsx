import React, { useRef } from 'react';
import '../../assets/css/EstilosFormulario.css';
import Josbel from '../../assets/img/josbel.png'
import ChiapasDeMisAmores from '../../assets/img/Chiapas.png'
import Michoacan from '../../assets/img/michoacan.png'
import Coketa from '../../assets/img/coketa.png'
import LopezOchoa from '../../assets/img/lopezochoa.png'
/* elvergadelramos */
import Radio from '../../assets/img/radio.png'
import Am from '../../assets/img/am.png'
import Chococel from '../../assets/img/chococel.png'
import Casona from '../../assets/img/la casona.png'
import Helios from '../../assets/img/helios.png'
import Veterinaria from '../../assets/img/elpollito.png'
import ELRey from '../../assets/img/elrey.png'
import Lidos from '../../assets/img/lidospizza.png'




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
                <form ref={formRef} onSubmit={handleSubmit} >
                    <h1>Nombre Completo:</h1>
                    <input type="text" name="NombrePersona" required />
                    <h1>Edad:</h1>
                    <input type="number" name="edad" required />
                    <h1>Número de Teléfono:</h1>
                    <input type="number" name="numeroTelefono" required />
                    <h1>Usuario de Facebook:</h1>
                    <input type="text" name="UsuFacebook" required />
                    <h1>Sexo:</h1>
                    <select name="sexo" required>
                        <option value="masculino">Masculino</option>
                        <option value="femenino">Femenino</option>
                    </select>
                    <button type="submit">Enviar</button>
                </form>
            </div>

            <div className="logos-section">
                <img src={Josbel} alt="Logo 1" />
                <img src={ChiapasDeMisAmores} alt="Logo 2" />
                <img src={Michoacan} alt="Logo 1" />
                <img src={Coketa} alt="Logo 2" />
                <img src={LopezOchoa} alt="Logo 1" />
                <img src={Radio} alt="Logo 2" />
                <img src={Am} alt="Logo 1" />
                <img src={Chococel} alt="Logo 2" />
                <img src={Casona} alt="Logo 1" />
                <img src={Helios} alt="Logo 2" />
                <img src={Veterinaria} alt="Logo 1" />
                <img src={ELRey} alt="Logo 2" />
                <img src={Lidos} alt="Logo 2" />
            </div>
        </div>
    );
}

export default Formulario;