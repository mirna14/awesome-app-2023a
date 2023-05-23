// Importar el modulo http
import http from 'http';

// Importar express
import express from 'express';

// Crear una instancia de express
const app = express(); // (req,res)=> {Un monto de codigo}

// Creando el servidor
const server = http.createServer(app);

// Definir puertos
const port = 3000;
const ip = "0.0.0.0";

// Arrancar el server
server.listen(port,ip, (err)=>{
    console.log(`📣 Sirviendo en htpp//:${process.env.ip}:3000`);
})