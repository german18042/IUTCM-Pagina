import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { NextResponse } from 'next/server';

const SPREADSHEET_ID = '1xN_H-e6-zvH6wYaqYBCcrxIeGs9sK4IRaqLH0-EhbP8';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, apellido, cedula, email, telefono, region } = body;

    // Validaciones
    if (!nombre || !apellido || !cedula || !email || !telefono || !region) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'El formato del correo electrónico no es válido' },
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

    console.log('Configuración inicial:', {
      clientEmail,
      spreadsheetId: SPREADSHEET_ID,
      hasPrivateKey: !!privateKey
    });

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
    console.log('Documento cargado:', {
      title: doc.title,
      sheetCount: doc.sheetCount,
      availableSheets: Object.keys(doc.sheetsByTitle)
    });

    // Obtener la hoja de cálculo o crearla si no existe
    const sheetName = 'Solicitudes';
    console.log('Buscando hoja:', sheetName);
    let sheet = doc.sheetsByTitle[sheetName];
    
    if (!sheet) {
      console.log(`Hoja "${sheetName}" no encontrada. Intentando crear nueva hoja...`);
      try {
        sheet = await doc.addSheet({ 
          title: sheetName, 
          headerValues: ['Fecha', 'Nombre', 'Apellido', 'Cédula', 'Email', 'Teléfono', 'Región'] 
        });
        console.log('Nueva hoja creada exitosamente');
      } catch (error) {
        console.error('Error al crear nueva hoja:', error);
        throw new Error('No se pudo crear la hoja. Verifica los permisos de la cuenta de servicio.');
      }
    } else {
      console.log('Hoja existente encontrada');
    }
    
    console.log('Intentando agregar nueva fila...');
    try {
      const newRow = await sheet.addRow({
        Fecha: new Date().toLocaleString('es-VE', { timeZone: 'America/Caracas' }),
        Nombre: nombre,
        Apellido: apellido,
        Cédula: cedula,
        Email: email,
        Teléfono: telefono,
        Región: region
      });
      console.log('Fila agregada exitosamente:', newRow.rowNumber);
    } catch (error) {
      console.error('Error al agregar fila:', error);
      throw new Error('No se pudo agregar la fila. Verifica los permisos de escritura.');
    }

    return NextResponse.json({ 
      message: 'Solicitud enviada con éxito',
      details: {
        documentTitle: doc.title,
        sheetName: sheet.title,
        rowCount: sheet.rowCount
      }
    }, { status: 200 });
  } catch (error: any) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    const errorDetails = {
      name: error instanceof Error ? error.name : 'UnknownError',
      message: errorMessage,
      stack: error instanceof Error ? error.stack : undefined
    };
    
    console.error('Error detallado al enviar la solicitud:', errorDetails);
    return NextResponse.json(
      { 
        error: `Error al enviar la solicitud: ${errorMessage}`,
        details: errorDetails
      },
      { status: 500 }
    );
  }
}
