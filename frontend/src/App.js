import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Monitors from './pages/private/Monitors';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h3>Inicio</h3>} />
        <Route path="/app" element={<Home />}>
          <Route index path="monitor" element={<Monitors />} />
          <Route path="monitoring" element={<h3>Lista de monitorías</h3>} />
        </Route>
      <Route path='*' element={<h3>404</h3>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
