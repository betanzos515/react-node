/* dentro del controlador vas a tener diferentes funciones 
que se van a asociar al modelo y al routing */
import Paciente from '../models/Paciente.js'

//cuando se crea un nuevo cliente
const nuevoCliente = async (req,res,next)=>{
    //insertar en la base de datos
    const paciente = new Paciente(req.body);
    try {
        //crear objeto con datos de req.body;
        console.log(req.body);
        await paciente.save();//con esto guardamos en la base de datos
        res.json({mensaje: 'El usuario se guardo correctamente'});
    } catch (error) {
        console.log(error);
        next();
    }
}

const obtenerPacientes = async (req,res,next)=>{
    try {
        const pacientes = await Paciente.find({});
        res.json(pacientes);//a diferencia del ejercicio anterior ocupamos res para que retornemos los valores de pacientes
    } catch (error) {
        console.log(error);
        next();
    }
}

const obtenerPaciente = async (req, res, next)=>{
    try {
        const {id} = req.params;
        const paciente = await Paciente.findById(id);
        res.json(paciente);
        console.log(id)
    } catch (error) {
        console.log(error);
        next();
    }
}

const actualizarPaciente = async (req,res,next)=>{
    try {
        const {id} = req.params;
        const paciente = await Paciente.findOneAndUpdate({_id:id},req.body,{
            new: true//con esto traes el registo nuevo, sino por default mongoose te retornal el registro anterior
        });
        res.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
}

const eliminarPaciente = async (req,res,next)=>{
    try {
        const {id} = req.params
        console.log(id);
        await Paciente.findOneAndDelete({_id:id});
        res.json('El paciente fue eliminado');
    } catch (error) {
        console.log(error);
        next();
    }
}

export {
    nuevoCliente,
    obtenerPacientes,
    obtenerPaciente,
    actualizarPaciente,
    eliminarPaciente
}
