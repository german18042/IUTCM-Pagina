import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Noticia from '@/models/Noticia';
import noticiasSeed from '@/data/noticias-seed.json';

export async function POST() {
  try {
    console.log('Iniciando proceso de seed...');
    
    // Conectar a la base de datos
    await connectDB();
    console.log('Conexión a MongoDB establecida');

    // Eliminar noticias existentes
    const deleteResult = await Noticia.deleteMany({});
    console.log('Noticias eliminadas:', deleteResult);

    // Insertar las nuevas noticias
    console.log('Intentando insertar', noticiasSeed.noticias.length, 'noticias');
    
    // Insertar una por una para mejor manejo de errores
    const noticiasInsertadas = [];
    for (const noticia of noticiasSeed.noticias) {
      try {
        const nuevaNoticia = new Noticia(noticia);
        await nuevaNoticia.validate(); // Validar antes de guardar
        const saved = await nuevaNoticia.save();
        noticiasInsertadas.push(saved);
        console.log('Noticia insertada:', saved.titulo);
      } catch (error: any) {
        console.error('Error al insertar noticia:', noticia.titulo);
        console.error('Detalles del error:', error.message);
        throw error; // Re-lanzar el error para manejarlo en el catch principal
      }
    }

    return NextResponse.json({
      message: 'Base de datos poblada exitosamente',
      count: noticiasInsertadas.length,
      noticias: noticiasInsertadas.map(n => ({
        _id: n._id,
        titulo: n.titulo,
        categoria: n.categoria
      }))
    });
  } catch (error: any) {
    console.error('Error en el proceso de seed:', error);
    return NextResponse.json(
      { 
        message: 'Error al poblar la base de datos',
        error: error.message,
        details: error.errors || {} 
      },
      { status: 500 }
    );
  }
} 