const express = require('express');
const cors = require('cors');
const personaRoutes = require('./routes/personaRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors()); // Permite peticiones desde el frontend
app.use(express.json());

// Rutas
app.use('/api', personaRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ 
    message: 'API de Personas funcionando correctamente',
    endpoints: {
      personas: '/api/personas'
    }
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Endpoint de personas: http://localhost:${PORT}/api/personas`);
});