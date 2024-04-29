import { useState, useEffect } from 'react';
import '../../assets/css/SeccionesVotos.css';

function Seccionales() {
    const [data, setData] = useState([]);
    const [randomUser, setRandomUser] = useState(null);

    useEffect(() => {
        fetch('http://54.164.53.240:3000/usuarios')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const handleSorteo = () => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setRandomUser(data[randomIndex]);
    };

    return (
        <div className="grafi">
            <h1>Persona Ganadora</h1>
            <button onClick={handleSorteo}>Realizar sorteo</button>
            {randomUser && <p className='TextWinnner'>{randomUser.NombrePersona}</p>}
            {randomUser && <p className='TextWinnner'>{randomUser.numeroTelefono}</p>}
            <p>Cantidad de usuarios: {data.length}</p>
        </div>
    );
}

export default Seccionales;