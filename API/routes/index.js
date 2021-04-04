import express from 'express';
import {nuevoCliente,obtenerPacientes,obtenerPaciente, actualizarPaciente,eliminarPaciente} from '../controllers/pacienteController.js';
const router = express.Router();

router.post('/pacientes',nuevoCliente);//agregamos un nuevo cliente
router.get('/pacientes',obtenerPacientes);//obtenemos la lista de todos los pacientes
router.get('/pacientes/:id',obtenerPaciente);//obtenemos un paciente en especifico.
router.put('/pacientes/:id',actualizarPaciente);//actualizas un paciente por su id
router.delete('/pacientes/:id',eliminarPaciente);
export default router;