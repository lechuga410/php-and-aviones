const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Servir archivos estáticos de React desde la carpeta build
app.use(express.static(path.join(__dirname, 'build')));

// Manejar todas las solicitudes
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto http://localhost:5000/ ${PORT}`);
  console.log(`📁 Sirviendo archivos desde: ${path.join(__dirname, 'build')}`);
});
