import mongoose from 'mongoose';

const NoticiaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: [true, 'El título es requerido'],
    trim: true,
  },
  contenido: {
    type: String,
    required: [true, 'El contenido es requerido'],
  },
  resumen: {
    type: String,
    required: [true, 'El resumen es requerido'],
    trim: true,
  },
  imagen: {
    type: String,
    required: [true, 'La URL de la imagen es requerida'],
  },
  autor: {
    type: String,
    required: [true, 'El autor es requerido'],
    trim: true,
  },
  categoria: {
    type: String,
    required: [true, 'La categoría es requerida'],
    enum: ['Admisiones', 'Convenios', 'Logros', 'Infraestructura', 'Capacitación', 'Eventos', 'Académico', 'Institucional'],
    default: 'Institucional',
  },
  estado: {
    type: String,
    enum: ['borrador', 'publicado'],
    default: 'borrador',
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true,
  versionKey: false,
});

export default mongoose.models.Noticia || mongoose.model('Noticia', NoticiaSchema); 