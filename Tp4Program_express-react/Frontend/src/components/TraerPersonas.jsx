import { useState, useEffect } from 'react';
import axios from 'axios';
import ListaTarjetas from './ListaTarjetas';

const TraerPersonas = () => {
  const [personas, setPersonas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPersonas = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:3001/api/personas');
        
        if (response.data.success) {
          setPersonas(response.data.data);
        } else {
          setError('Error al obtener los datos');
        }
      } catch (error) {
        console.error('Error al obtener personas:', error);
        setError('Error de conexión con el servidor');
      } finally {
        setLoading(false);
      }
    };

    fetchPersonas();
  }, []);

  if (loading) {
    return (
      <div>
        <div>Cargando personas...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <div>Error: {error}</div>
      </div>
    );
  }

  return (
    <div>
      <h1>Lista de Personas</h1>
      <ListaTarjetas personas={personas} />
    </div>
  );
};

export default TraerPersonas;