import { useState } from 'react';
import LibroList from './libroList';
function LibroView() {
  const [libro, setLibro] = useState([{
    id: 0,
    title: 'Cien años de soledad',
    description: 'Novela emblemática de Gabriel García Márquez.',
    status: 'Pendiente',
    genero: 'Realismo mágico',
    autor: 'Gabriel García Márquez',
    reseña: 'Una obra maestra de la literatura latinoamericana.',
    calificacion: 5,
  }]);


  return (
    <fragment>
      <LibroList libros={libro} onLibroChange={setLibro} />
      
    </fragment>
  )
}

export default LibroView