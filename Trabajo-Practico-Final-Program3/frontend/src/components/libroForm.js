function libroForm({libro, onSubmit}){
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const libroData = {
          title: formData.get('title'),
          description: formData.get('description'),
          genero: formData.get('genero'),
          autor: formData.get('autor'),
          reseña: formData.get('reseña'),
          calificacion: formData.get('calificacion'),
        };
        
        onSubmit(libroData);
      };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Título:</label>
                <input type="text" id="title" name="title" defaultValue={libro?.title || ''} required />
            </div>
            <div>
                <label htmlFor="description">Descripción:</label>
                <input type="text" id="description" name="description" defaultValue={libro?.description || ''} />
            </div>
            <div>
                <label htmlFor="genero">Género:</label>
                <input type="text" id="genero" name="genero" defaultValue={libro?.genero || ''} required />
            </div>
            <div>
                <label htmlFor="autor">Autor:</label>
                <input type="text" id="autor" name="autor" defaultValue={libro?.autor || ''} required />
            </div>
            <div>
                <label htmlFor="reseña">Reseña:</label>
                <input type="text" id="reseña" name="reseña" defaultValue={libro?.reseña || ''} />
            </div>
            <div>
                <label htmlFor="calificacion">Calificación:</label>
                <input type="number" id="calificacion" name="calificacion" defaultValue={libro?.calificacion || 0} min="0" max="5" required />
            </div>
            <button type="submit">Guardar</button>
        </form>
    );
}