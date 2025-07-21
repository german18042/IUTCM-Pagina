import { google } from 'googleapis';
import { NextResponse } from 'next/server';

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });
const SPREADSHEET_ID = '1xN_H-e6-zvH6wYaqYBCcrxIeGs9sK4IRaqLH0-EhbP8';
const SHEET_NAME = 'Solicitudes de Carreras';

async function ensureSheetExists() {
  try {
    // Obtener todas las hojas del spreadsheet
    const response = await sheets.spreadsheets.get({
      spreadsheetId: SPREADSHEET_ID,
    });

    const sheet = response.data.sheets?.find(
      (s) => s.properties?.title === SHEET_NAME
    );

    if (!sheet) {
      // Si la hoja no existe, la creamos
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId: SPREADSHEET_ID,
        requestBody: {
          requests: [
            {
              addSheet: {
                properties: {
                  title: SHEET_NAME,
                  gridProperties: {
                    rowCount: 1000,
                    columnCount: 6,
                  },
                },
              },
            },
          ],
        },
      });

      // Agregar encabezados
      await sheets.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME}!A1:F1`,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [['Fecha', 'Nombre', 'Email', 'Teléfono', 'Carrera', 'Mensaje']],
        },
      });
    }
  } catch (error) {
    console.error('Error al verificar/crear la hoja:', error);
    throw error;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, telefono, carrera, message } = body;

    // Validaciones
    if (!name || !email || !telefono || !carrera || !message) {
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

    // Asegurarnos de que la hoja existe
    await ensureSheetExists();

    // Fecha actual en formato venezolano
    const date = new Date().toLocaleDateString('es-VE', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });

    // Preparar los datos para Google Sheets
    const row = [date, name, email, telefono, carrera, message];

    // Agregar datos a la hoja
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:F`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [row],
      },
    });

    return NextResponse.json(
      { message: 'Solicitud enviada exitosamente' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al procesar la solicitud de carrera:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
} 