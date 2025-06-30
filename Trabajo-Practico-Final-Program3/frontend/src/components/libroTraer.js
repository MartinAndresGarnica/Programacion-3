import React, { useState, useEffect } from 'react';
import LibroForm from './libroForm';

function LibrosPage() {
  const [libros, setLibros] = useState([]);
  const [libroEdit, setLibroEdit] = useState(null);


  useEffect(() => {
    fetch('http://localhost:3001/api/libros')
      .then(res => res.json())
      .then(data => setLibros(data.libros));
  }, []);


  const handleAddLibro = (libroData) => {
    fetch('http://localhost:3001/api/libros', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(libroData)
    })
      .then(res => res.json())
      .then(data => {
        setLibros([...libros, data.libro]);
      });
  };


  const handleEditLibro = (libroData) => {
    fetch(`http://localhost:3001/api/libros/${libroEdit.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(libroData)
    })
      .then(res => res.json())
      .then(data => {
        setLibros(libros.map(l => l.id === libroEdit.id ? data.libro : l));
        setLibroEdit(null);
      });
  };

  return (
    <div>
      <h2>Libros</h2>
      <ul>
        {libros.map(libro => (
          <li key={libro.id}>
            {libro.title} - {libro.autor}
            <button onClick={() => setLibroEdit(libro)}>Editar</button>
          </li>
        ))}
      </ul>
      <h3>{libroEdit ? 'Editar libro' : 'Agregar libro'}</h3>
      <LibroForm
        libro={libroEdit}
        onSubmit={libroEdit ? handleEditLibro : handleAddLibro}
      />
    </div>
  );
}

export default LibrosPage;