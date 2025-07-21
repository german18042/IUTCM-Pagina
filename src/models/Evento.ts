import mongoose from 'mongoose';

const eventoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
    required: true,
  },
  fechaInicio: {
    type: Date,
    required: true,
  },
  fechaFin: {
    type: Date,
    required: true,
  },
  lugar: {
    type: String,
    required: true,
  },
  organizador: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
    enum: ['conferencia', 'taller', 'seminario', 'cultural', 'deportivo', 'otro']
  },
  estado: {
    type: String,
    enum: ['programado', 'cancelado', 'finalizado'],
    default: 'programado'
  },
  capacidad: {
    type: Number,
    required: true,
  },
  inscripcionRequerida: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

const Evento = mongoose.models.Evento || mongoose.model('Evento', eventoSchema);

export default Evento; 