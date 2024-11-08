const express = require('express');
const mongoose = require('./config/db');
const swaggerDocs = require('./config/swagger');
const linkRoutes = require('./routes/linkRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Middleware para JSON e Segurança Básica
app.use(express.json());
app.disable('x-powered-by'); // Segurança: oculta o cabeçalho X-Powered-By

// Rota da API
app.use('/api/links', linkRoutes);

// Documentação Swagger
swaggerDocs(app);

// Middleware de Manipulação de Erros
app.use(errorHandler);

// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
