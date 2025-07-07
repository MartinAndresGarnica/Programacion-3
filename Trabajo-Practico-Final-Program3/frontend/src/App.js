import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LibrosPage from './components/libroTraer';
import LibroForm from './components/libroForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LibrosPage />} />
        <Route path="/libroForm" element={<LibroForm />} />
        <Route path="/libroForm/:id" element={<LibroForm />} />
      </Routes>
    </Router>
  );
}

export default App;