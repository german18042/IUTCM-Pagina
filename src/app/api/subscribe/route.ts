import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { NextResponse } from 'next/server';

const SPREADSHEET_ID = '1xN_H-e6-zvH6wYaqYBCcrxIeGs9sK4IRaqLH0-EhbP8';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'El correo electrónico es requerido' },
        { status: 400 }
      );
    }

    // Verificar que las variables de entorno estén definidas
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY;

    if (!clientEmail || !privateKey) {
      console.error('Variables de entorno faltantes:', {
        hasClientEmail: !!clientEmail,
        hasPrivateKey: !!privateKey,
      });
      return NextResponse.json(
        { error: 'Error de configuración: Faltan variables de entorno necesarias' },
        { status: 500 }
      );
    }

    // Configurar autenticación
    const serviceAccountAuth = new JWT({
      email: clientEmail,
      key: privateKey,
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/drive.file',
      ],
    });

    // Inicializar el documento
    console.log('Intentando acceder al documento...');
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID, serviceAccountAuth);
    
    console.log('Cargando información del documento...');
    await doc.loadInfo();

    // Obtener la hoja de suscripciones o crearla si no existe
    const sheetName = 'Suscripciones';
    console.log('Buscando hoja:', sheetName);
    let sheet = doc.sheetsByTitle[sheetName];
    
    if (!sheet) {
      console.log(`Hoja "${sheetName}" no encontrada. Creando nueva hoja...`);
      try {
        sheet = await doc.addSheet({ 
          title: sheetName, 
          headerValues: ['Fecha', 'Email'] 
        });
        console.log('Nueva hoja creada exitosamente');
      } catch (error) {
        console.error('Error al crear nueva hoja:', error);
        throw new Error('No se pudo crear la hoja. Verifica los permisos de la cuenta de servicio.');
      }
    }
    
    // Verificar si el email ya existe
    const rows = await sheet.getRows();
    const emailExists = rows.some(row => row.get('Email') === email);
    
    if (emailExists) {
      return NextResponse.json(
        { error: 'Este correo electrónico ya está suscrito' },
        { status: 400 }
      );
    }

    // Agregar nueva suscripción
    console.log('Agregando nueva suscripción...');
    try {
      const newRow = await sheet.addRow({
        Fecha: new Date().toLocaleString('es-VE', { timeZone: 'America/Caracas' }),
        Email: email
      });
      console.log('Suscripción agregada exitosamente:', newRow.rowNumber);
    } catch (error) {
      console.error('Error al agregar suscripción:', error);
      throw new Error('No se pudo agregar la suscripción. Verifica los permisos de escritura.');
    }

    return NextResponse.json({ 
      message: 'Suscripción exitosa',
      details: {
        email: email,
        date: new Date().toLocaleString('es-VE', { timeZone: 'America/Caracas' })
      }
    }, { status: 200 });
  } catch (error: any) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    const errorDetails = {
      name: error instanceof Error ? error.name : 'UnknownError',
      message: errorMessage,
      stack: error instanceof Error ? error.stack : undefined
    };
    
    console.error('Error al procesar la suscripción:', errorDetails);
    return NextResponse.json(
      { 
        error: `Error al procesar la suscripción: ${errorMessage}`,
        details: errorDetails
      },
      { status: 500 }
    );
  }
} 