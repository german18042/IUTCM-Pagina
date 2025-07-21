import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import Evento from '@/models/Evento';
import { connectDB } from '@/lib/mongodb';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const evento = await Evento.findById(params.id);
    if (!evento) {
      return NextResponse.json({ error: 'Evento no encontrado' }, { status: 404 });
    }
    return NextResponse.json(evento);
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener el evento' }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    await connectDB();
    const data = await request.json();
    const evento = await Evento.findByIdAndUpdate(params.id, data, { new: true });
    if (!evento) {
      return NextResponse.json({ error: 'Evento no encontrado' }, { status: 404 });
    }
    return NextResponse.json(evento);
  } catch (error) {
    return NextResponse.json({ error: 'Error al actualizar el evento' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    await connectDB();
    const evento = await Evento.findByIdAndDelete(params.id);
    if (!evento) {
      return NextResponse.json({ error: 'Evento no encontrado' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Evento eliminado correctamente' });
  } catch (error) {
    return NextResponse.json({ error: 'Error al eliminar el evento' }, { status: 500 });
  }
} 