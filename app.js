// Importar express
import express from 'express';

// Importando el enrutador
import adminRouter from './routes/admin.routes.js';
import shopRouter from './routes/shop.routes.js';


// Crear una instancia de express
const app = express();

// Middleware de parseo de datos del cliente
app.use(express.urlencoded({ extended: true}));

// Se agrega ruta de administrador
app.use(adminRouter);
// Se agrega ruta shop
app.use(shopRouter);

// Definiendo puertos
const port = 3000;
const ip = "0.0.0.0";

// Arrancando el servidor
app.listen(port, ip, () => {
    console.log(`🤖 Sirviendo en http://localhost:${port}`);
  });