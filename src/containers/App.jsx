import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import VotosSecciones from '../pages/VotosSecciones';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/VotosSecciones' element={<VotosSecciones />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;