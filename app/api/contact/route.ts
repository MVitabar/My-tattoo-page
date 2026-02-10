import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    // Verify environment variables are loaded
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      console.error('Environment variables not loaded:', {
        GMAIL_USER: !!process.env.GMAIL_USER,
        GMAIL_PASS: !!process.env.GMAIL_PASS
      });
      return NextResponse.json(
        { error: 'Configuração de email não encontrada no servidor' },
        { status: 500 }
      );
    }

    console.log('Environment variables loaded successfully');

    // Configure el transportador de correo
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
      secure: false,
      tls: {
        rejectUnauthorized: false
      }
    });

    // Test transporter connection
    try {
      await transporter.verify();
      console.log('Transporter verified successfully');
    } catch (verifyError) {
      console.error('Transporter verification failed:', verifyError);
      return NextResponse.json(
        { error: 'Falha na autenticação do email', details: verifyError instanceof Error ? verifyError.message : 'Unknown error' },
        { status: 500 }
      );
    }

    // Prepara los archivos adjuntos
    const attachments = [];
    for (let i = 0; i < 3; i++) {
      const file = formData.get(`file${i}`);
      if (file && file instanceof Blob) {
        const buffer = Buffer.from(await file.arrayBuffer());
        attachments.push({
          filename: `referencia-${i + 1}.jpg`,
          content: buffer,
        });
      }
    }

    // Configura las opciones del correo
    const mailOptions = {
      from: formData.get('email') as string,
      to: 'vitabarmartin@gmail.com',
      subject: `Nova Solicitação de Tatuagem - ${formData.get('nome')}`,
      html: `
        <h2>Nova Solicitação de Tatuagem</h2>
        <p><strong>Nome:</strong> ${formData.get('nome')}</p>
        <p><strong>Email:</strong> ${formData.get('email')}</p>
        <p><strong>Telefone:</strong> ${formData.get('telefone')}</p>
        <p><strong>Data Preferida:</strong> ${formData.get('data')}</p>
        <p><strong>Hora Preferida:</strong> ${formData.get('hora')}</p>
        <p><strong>Descrição:</strong> ${formData.get('descricao')}</p>
      `,
      attachments,
    };

    // Envía el correo
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email enviado com sucesso!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error detallado:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Erro ao enviar email', details: errorMessage },
      { status: 500 }
    );
  }
}