import mongoose from 'mongoose';
const {Schema} = mongoose;

const pacientesSchema = new Schema({
    nombre:{
        type:String,
        trim:true
    },
    propietario:{
        type:String,
        trim:true
    },
    telefono:{
        type:String,
        trim:true
    },
    fecha:{
        type:String,
        trim:true
    },
    hora:{
        type:String,
        trim:true
    },
    sintomas:{
        type:String,
        trim:true
    }
});

let schemaPaciente = mongoose.model('Paciente',pacientesSchema);

export default schemaPaciente;