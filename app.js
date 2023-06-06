// Importar express
import express from 'express';
// Importando http-status
import httpStatus from 'http-status';
// Se importa path
import path from 'path';
// Importando el enrutador
import adminRouter from './routes/admin.route.js';
import shopRouter from './routes/shop.route.js';

//Importando ROOT_DIR
import { ROOT_DIR } from './helpers/paths.js';

// Crear una instancia de express
const app = express();

// Middleware de parseo de datos del cliente
app.use(express.urlencoded({ extended: true}));

// Se registra el middleware para servidor de archivos estaticos
app.use(express.static(path.join(ROOT_DIR, 'public')));

// Se agrega ruta de administrador
app.use('/admin', adminRouter);
// Se agrega ruta shop
app.use(shopRouter);

// Registrando middleware para el error 404
app.use((req, res) => {
  res.status(httpStatus.NOT_FOUND)
  .sendFile(path.resolve('views','404.html'))
});

// Definiendo puertos
const port = 3000;
const ip = "0.0.0.0"
// Arrancando el servidor
app.listen(port, ip, () => {
  console.log(`🤖 Sirviendo en http://localhost:${port}`);
});