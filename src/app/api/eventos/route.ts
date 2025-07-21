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
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    await connectDB();
    const data = await request.json();
    const evento = await Evento.create(data);
    return NextResponse.json(evento, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error al crear evento' }, { status: 500 });
  }
} 