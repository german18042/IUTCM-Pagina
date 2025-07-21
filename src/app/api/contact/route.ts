import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { NextResponse } from 'next/server';

const SPREADSHEET_ID = '1xN_H-e6-zvH6wYaqYBCcrxIeGs9sK4IRaqLH0-EhbP8';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

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
    const sheetName = 'Formulario_Contacto';
    console.log('Buscando hoja:', sheetName);
    let sheet = doc.sheetsByTitle[sheetName];
    
    if (!sheet) {
      console.log(`Hoja "${sheetName}" no encontrada. Intentando crear nueva hoja...`);
      try {
        sheet = await doc.addSheet({ 
          title: sheetName, 
          headerValues: ['Fecha', 'Nombre', 'Email', 'Asunto', 'Mensaje'] 
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
        Nombre: name,
        Email: email,
        Asunto: subject,
        Mensaje: message
      });
      console.log('Fila agregada exitosamente:', newRow.rowNumber);
    } catch (error) {
      console.error('Error al agregar fila:', error);
      throw new Error('No se pudo agregar la fila. Verifica los permisos de escritura.');
    }

    return NextResponse.json({ 
      message: 'Mensaje enviado con éxito',
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
    
    console.error('Error detallado al enviar el mensaje:', errorDetails);
    return NextResponse.json(
      { 
        error: `Error al enviar el mensaje: ${errorMessage}`,
        details: errorDetails
      },
      { status: 500 }
    );
  }
} 
 
 
 
 