import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import Noticia from '@/models/Noticia';
import { connectDB } from '@/lib/mongodb';

export async function GET() {
  try {
    console.log('Intentando obtener noticias...');
    await connectDB();
    console.log('Conexión exitosa a MongoDB');
    
    const noticias = await Noticia.find().sort({ fecha: -1 });
    console.log(`Se encontraron ${noticias.length} noticias`);
    
    return NextResponse.json(noticias);
  } catch (error: any) {
    console.error('Error al obtener noticias:', error);
    return NextResponse.json(
      { message: 'Error al obtener las noticias' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    console.log('Iniciando creación de noticia...');
    const body = await request.json();
    console.log('Datos recibidos:', body);

    // Validar campos requeridos
    if (!body.titulo || !body.contenido) {
      console.log('Error: Faltan campos requeridos');
      return NextResponse.json(
        { message: 'El título y contenido son requeridos' },
        { status: 400 }
      );
    }

    // Conectar a la base de datos
    console.log('Conectando a MongoDB...');
    await connectDB();
    console.log('Conexión exitosa a MongoDB');

    // Crear la noticia
    const noticiaData = {
      titulo: body.titulo,
      contenido: body.contenido,
      resumen: body.resumen,
      imagen: body.imagen,
      autor: body.autor,
      categoria: body.categoria,
      estado: body.estado || 'borrador',
      fecha: body.fecha || new Date(),
    };
    console.log('Intentando crear noticia con datos:', noticiaData);

    const noticia = await Noticia.create(noticiaData);
    console.log('Noticia creada exitosamente:', noticia);

    return NextResponse.json(noticia, { status: 201 });
  } catch (error: any) {
    console.error('Error detallado al crear noticia:', error);
    return NextResponse.json(
      { message: 'Error al crear la noticia: ' + (error.message || 'Error desconocido') },
      { status: 500 }
    );
  }
} 