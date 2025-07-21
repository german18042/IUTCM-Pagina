import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Por favor define la variable de entorno MONGODB_URI');
}

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(MONGODB_URI);

    if (connection.readyState === 1) {
      console.log('MongoDB conectado');
      if (connection.db) {
        console.log('Base de datos:', connection.db.databaseName);
      }
      return Promise.resolve(true);
    }
  } catch (error) {
    console.error('Error conectando a MongoDB:', error);
    return Promise.reject(error);
  }
}; 