const express = require('express');
const cors = require('cors');
const app = express();
const personaRoutes = require('./routes/personaRoutes');

app.use(cors());
app.use(express.json());
app.use('/', personaRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});