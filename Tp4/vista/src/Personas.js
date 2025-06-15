import { useState, useEffect } from 'react';

function Personas() {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/personas')
      .then(res => res.json())
      .then(data => setPersonas(data))
      .catch(err => console.error("Error al obtener personas:", err));
  }, []);

  return (
    <div>
      <h2>Lista de personas</h2>
      <ul>
        {personas.map(p => (
          <li key={p.id}>
            {p.nombre} {p.apellido} - {p.edad} años - {p.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Personas;