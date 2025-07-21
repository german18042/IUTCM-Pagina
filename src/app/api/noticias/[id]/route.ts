import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import Noticia from '@/models/Noticia';
import { connectDB } from '@/lib/mongodb';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const noticia = await Noticia.findById(params.id);
    
    if (!noticia) {
      return NextResponse.json(
        { message: 'Noticia no encontrada' },
        { status: 404 }
      );
    }

    return NextResponse.json(noticia);
  } catch (error: any) {
    console.error('Error al obtener la noticia:', error);
    return NextResponse.json(
      { message: 'Error al obtener la noticia' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    await connectDB();

    const noticia = await Noticia.findByIdAndUpdate(
      params.id,
      { $set: body },
      { new: true, runValidators: true }
    );

    if (!noticia) {
      return NextResponse.json(
        { message: 'Noticia no encontrada' },
        { status: 404 }
      );
    }

    return NextResponse.json(noticia);
  } catch (error: any) {
    console.error('Error al actualizar la noticia:', error);
    return NextResponse.json(
      { message: 'Error al actualizar la noticia: ' + (error.message || 'Error desconocido') },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const noticia = await Noticia.findByIdAndDelete(params.id);

    if (!noticia) {
      return NextResponse.json(
        { message: 'Noticia no encontrada' },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: 'Noticia eliminada correctamente' });
  } catch (error: any) {
    console.error('Error al eliminar la noticia:', error);
    return NextResponse.json(
      { message: 'Error al eliminar la noticia' },
      { status: 500 }
    );
  }
} 