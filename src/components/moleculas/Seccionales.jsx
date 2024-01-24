import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import '../../assets/css/SeccionesVotos.css';

function Seccionales() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Reemplaza estos datos con tus propios valores
        const tusDatos = [945, 623, 1564, 1068, 657, 592, 968, 620, 557, 932, 1641, 327, 1624, 1028, 2097, 685, 856, 395, 715, 258, 1213, 623, 441, 600, 1386, 591, 1587, 983, 537, 395, 201, 404, 676, 414, 406, 1174, 859];

        setData(tusDatos);
    }, []);

    const inicioSeccion = 197; // Establece la sección inicial deseada
    const etiquetas = Array.from({ length: 36 }, (_, i) => `Seccion ${inicioSeccion + i}`);
    const datos = data.slice(0, etiquetas.length); // Ajusta los datos para coincidir con las etiquetas

    const chartData = {
        labels: etiquetas,
        datasets: [
            {
                label: 'Cantidad de Votos por Secciones',
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,192,192,0.4)',
                hoverBorderColor: 'rgba(75,192,192,1)',
                data: datos,
            },
        ],
        options: {
            maintainAspectRatio: false,
            responsive: true,
            // Puedes agregar más opciones según sea necesario
        },
    };

    return (
        <div className="grafi">
            <h1>Votos por Secciones 2021</h1>
            <h2>Total de votos: 30,642</h2>
            <Bar data={chartData} />
        </div>
    );
}

export default Seccionales;
