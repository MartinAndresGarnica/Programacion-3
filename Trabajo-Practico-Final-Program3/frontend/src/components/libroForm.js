import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/libroForm.css';


function LibroForm() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [genero, setGenero] = useState('');
    const [autor, setAutor] = useState('');
    const [reseña, setReseña] = useState('');
    const [calificacion, setCalificacion] = useState(0);
    const [status, setStatus] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:3001/api/libros/${id}`)
                .then(async res => {
                    if (!res.ok) {
                        const data = await res.json();
                        throw new Error(data.error);
                    }
                    return res.json();
                })
                .then(data => {
                    const libro = data.libro;
                    setTitle(libro.title || '');
                    setDescription(libro.description || '');
                    setGenero(libro.genero || '');
                    setAutor(libro.autor || '');
                    setReseña(libro.reseña || '');
                    setCalificacion(libro.calificacion || 0);
                    setStatus(libro.status || '');
                    setError('');
                })
                .catch(err => {
                    setError(err.message);
                });
        } else {
            setTitle('');
            setDescription('');
            setGenero('');
            setAutor('');
            setReseña('');
            setCalificacion(0);
            setStatus('');
            setError('');
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const libroData = { title, description, genero, autor, reseña, calificacion, status };
        if (id) {
            fetch(`http://localhost:3001/api/libros/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(libroData)
            })
                .then(res => res.json())
                .then(() => navigate('/'));
        } else {
            fetch('http://localhost:3001/api/libros', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(libroData)
            })
                .then(res => res.json())
                .then(() => navigate('/'));
        }
    };

    return (
        <>
            {error ? (
                <div style={{ color: 'red', margin: '1em 0' }}>Error: {error}</div>
            ) : (
                <div className='libro-form-container'>
                <form className="libro-form" onSubmit={handleSubmit}>
                    <h2>{id ? 'Editar Libro' : 'Agregar Libro'}</h2>
                    <div className="form-group">
                        <label className="form-label">Título:</label>
                        <input className="form-input" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Descripción:</label>
                        <textarea className="form-textarea" value={description} onChange={(e) => setDescription(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Género:</label>
                        <input className="form-input" type="text" value={genero} onChange={(e) => setGenero(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Autor:</label>
                        <input className="form-input" type="text" value={autor} onChange={(e) => setAutor(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Reseña:</label>
                        <textarea className="form-textarea" value={reseña} onChange={(e) => setReseña(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Calificación:</label>
                        <input className="form-input" type="number" value={calificacion} onChange={(e) => setCalificacion(Number(e.target.value))} min="0" max="5" step="0.1" required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Status:</label>
                        <select className="form-select" value={status} onChange={(e) => setStatus(e.target.value)} required>
                            <option value="">Seleccione un estado</option>
                            <option value="Leido">Leido</option>
                            <option value="Leyendo">Leyendo</option>
                            <option value="Por leer">Por leer</option>
                        </select>
                    </div>
                    <button className="form-button" type="submit">{id ? 'Actualizar Libro' : 'Agregar Libro'}</button>
                </form>
                </div>
            )}
        </>
    );
}

export default LibroForm;