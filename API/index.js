import express from 'express';
import mongoose from 'mongoose';
import router from './routes/index.js';
import cors from 'cors';

//crear el servidor 
const app = express();

//habilitar cors
app.use(cors());

//1.-definir un puerto y arranque
app.listen(4000,()=>{
    console.log('Servidor corriendo');
});

//2.- Conextar el servidor con mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria',{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useFindAndModify:false
});

// 4.- agregamos bodyparser para leer los datos desde el formulario.
app.use(express.urlencoded({extended:true}));

// 3.- habilitamos el routing
app.use('/',router);


