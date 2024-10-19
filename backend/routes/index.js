const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const mongoose = require('./database'); 
const empleadoRoutes = require('./routes/empleado.route');

// Configuraciones
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev')); 
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

// Rutas
app.use('/api/empleado', empleadoRoutes);

// Iniciando el servidor
app.listen(app.get('port'), () => {
    console.log('server activo en el puerto', app.get('port'));
});
app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');
});

