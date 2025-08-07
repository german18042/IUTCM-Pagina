import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import Evento from '@/models/Evento';
import { connectDB } from '@/lib/mongodb';

export async function GET() {
  try {
    await connectDB();
    const eventos = await Evento.find().sort({ fechaInicio: 1 });
    return NextResponse.json(eventos);
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener eventos' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    // Autenticación desactivada temporalmente para permitir crear eventos sin sesión
    // const session = await getServerSession();
    // if (!session) {
    //   return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    // }

    await connectDB();
    const data = await request.json();
    
    // Log para depuración
    console.log('Datos recibidos para crear evento:', JSON.stringify(data, null, 2));
    
    // Log específico para el campo enlaceInscripcion
    console.log('Campo enlaceInscripcion recibido:', data.inscripcionRequerida, data.enlaceInscripcion);
    
    const evento = await Evento.create(data);
    
    // Log del evento creado
    console.log('Evento creado:', JSON.stringify(evento, null, 2));
    
    return NextResponse.json(evento, { status: 201 });
  } catch (error) {
    console.error('Error al crear evento:', error);
    return NextResponse.json({ error: 'Error al crear evento' }, { status: 500 });
  }
}