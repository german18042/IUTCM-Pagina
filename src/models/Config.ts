import mongoose from 'mongoose';

const configSchema = new mongoose.Schema({
  bannerInscripciones: {
    activo: {
      type: Boolean,
      default: true,
    },
    ultimaModificacion: {
      type: Date,
      default: Date.now,
    },
    modificadoPor: {
      type: String,
      default: 'admin',
    },
  },
}, {
  timestamps: true,
});

const Config = mongoose.models.Config || mongoose.model('Config', configSchema);

export default Config; 
 
 
 