import { readFileSync } from 'fs';
import { join } from 'path';

export const dynamic = 'force-static';

export default function RootLayout() {
  let bodyContent = '';
  try {
    const html = readFileSync(join(process.cwd(), 'public', 'index.html'), 'utf-8');
    const match = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    bodyContent = match ? match[1] : '';
  } catch(e) {
    bodyContent = '<p style="color:red;padding:20px;">Error cargando la app: ' + e.message + '</p>';
  }
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SuperCompare — Comparador de Supermercados</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Instrument+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/app.css" />
        <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js" async />
      </head>
      <body
        dangerouslySetInnerHTML={{ __html: bodyContent }}
        suppressHydrationWarning
      />
    </html>
  );
}