function libroList(libros, onLibroClick) {
  return (
    <div className="libro-list">
      {libros.map(libro => (
        <div key={libro.id} className="libro-item" onClick={() => onLibroClick(libro)}>
          <h3>{libro.title}</h3>
          <p>Autor: {libro.autor}</p>
          <p>calificacion {libro.califiacion}</p>
          <span>Status: {libro.status}</span>
        </div>
      ))}
    </div>
  );
}