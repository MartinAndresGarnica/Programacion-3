

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../styles/card.css';
import '../styles/libroTraer.css';



function LibrosPage() {
  const [libros, setLibros] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/api/libros')
      .then(res => res.json())
      .then(data => setLibros(data.libros));
  }, []);

  const deleteLibro = (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este libro?')) {
      fetch(`http://localhost:3001/api/libros/${id}`, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(() => {
          setLibros(libros.filter(libro => libro.id !== id));
        });
    }
  };

  const buscarLibroGenero = (genero) => {
    if (!genero || genero.trim() === '') {
      fetch('http://localhost:3001/api/libros')
        .then(res => res.json())
        .then(data => setLibros(data.libros));
      return;
    }
    fetch(`http://localhost:3001/api/libros/genero/${genero}`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data.libros) && data.libros.length > 0) {
          setLibros(data.libros);
        } else {
          setLibros([]);
          window.alert('No se encontraron libros para ese género');
        }
      })
      .catch(() => {
        setLibros([]);
        window.alert('Error al buscar libros por género');
      });
  };

  return (
    <div>
      <div className="libro-header">
        <Link className="agregar-libro-btn" to="/libroForm">Agregar Libro</Link>
        <form className="buscar-genero-form" onSubmit={e => { e.preventDefault(); buscarLibroGenero(e.target.genero.value); }}>
          <input className="buscar-genero-input" type="text" name="genero" placeholder="Buscar por genero" />
          <button className="buscar-genero-btn" type="submit">Buscar</button>
        </form>
      </div>
      <h2 className="libros-titulo">Libros</h2>
      <div className="Container-card">
        <ul>
          {libros.map(libro => (
            <li className="card" key={libro.id}>
              <h3>Titulo: {libro.title}</h3>
              <img src={libro.image || '/assets/images/PlacehHolder.png'} alt="" style={{ width: '100px', height: '150px' }} />
              <p>Autor: {libro.autor}</p>
              <p>Calificacion: {libro.calificacion}</p>
              <p>Estado: {libro.status}</p>
              <p>Genero: {libro.genero}</p>
              <p>Reseña del libro: {libro.reseña}</p>
              <p>Descripción: {libro.description}</p>
              <button onClick={() => navigate(`/libroForm/${libro.id}`)}>Editar</button>
              <button onClick={() => deleteLibro(libro.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LibrosPage;