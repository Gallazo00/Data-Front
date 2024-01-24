import '../../assets/css/EstilosFormulario.css';

function Formulario() {

    return (
        <div>
            <form>
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
    );
}

export default Formulario;