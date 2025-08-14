import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import Evento from '@/models/Evento';
import { connectDB } from '@/lib/mongodb';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    await connectDB();
    const evento = await Evento.findById(resolvedParams.id);
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
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Autenticación desactivada temporalmente para permitir editar eventos sin sesión
    // const session = await getServerSession();
    // if (!session) {
    //   return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    // }

    const resolvedParams = await params;
    await connectDB();
    const data = await request.json();
    const evento = await Evento.findByIdAndUpdate(resolvedParams.id, data, { new: true });
    if (!evento) {
      return NextResponse.json({ error: 'Evento no encontrado' }, { status: 404 });
    }
    return NextResponse.json(evento);
  } catch (error) {
    console.error('Error al actualizar el evento:', error);
    return NextResponse.json({ error: 'Error al actualizar el evento' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Autenticación desactivada temporalmente para permitir eliminar eventos sin sesión
    // const session = await getServerSession();
    // if (!session) {
    //   return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    // }

    const resolvedParams = await params;
    await connectDB();
    const evento = await Evento.findByIdAndDelete(resolvedParams.id);
    if (!evento) {
      return NextResponse.json({ error: 'Evento no encontrado' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Evento eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar el evento:', error);
    return NextResponse.json({ error: 'Error al eliminar el evento' }, { status: 500 });
  }
}