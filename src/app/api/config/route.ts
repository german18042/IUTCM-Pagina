import { NextResponse } from 'next/server';
import Config from '@/models/Config';
import { connectDB } from '@/lib/mongodb';

export async function GET() {
  try {
    await connectDB();
    const config = await Config.findOne();
    return NextResponse.json(config || {});
  } catch (error) {
    return NextResponse.json(
      { message: 'Error al obtener la configuración' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    await connectDB();

    let config = await Config.findOne();
    
    if (!config) {
      config = await Config.create({
        bannerInscripciones: {
          activo: body.bannerInscripciones?.activo ?? true,
          modificadoPor: 'admin',
        },
      });
    } else {
      config.bannerInscripciones = {
        activo: body.bannerInscripciones?.activo ?? config.bannerInscripciones?.activo ?? true,
        ultimaModificacion: new Date(),
        modificadoPor: 'admin',
      };
      await config.save();
    }

    return NextResponse.json(config);
  } catch (error) {
    console.error('Error al actualizar la configuración:', error);
    return NextResponse.json(
      { message: 'Error al actualizar la configuración' },
      { status: 500 }
    );
  }
} 
 
 
 