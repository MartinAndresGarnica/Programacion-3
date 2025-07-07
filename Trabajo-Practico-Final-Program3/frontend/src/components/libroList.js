function LibroList({ libros }) {
  return (
    <div className="libro-list">
      {Array.isArray(libros) && libros.map(libro => (
        <div key={libro.id} className="libro-item" >
          <h3 className="Libro-Titulo">{libro.title}</h3>
          <p className="Libro-Autor">Autor: {libro.autor}</p>
          <p className="Libro-Calificacion">calificacion {libro.calificacion}</p>
          <span className="Libro-Status">Status: {libro.status}</span>
        </div>
      ))}
    </div>
  );
}

export default LibroList
