export const metadata = {
  title: 'SuperCompare — Comparador de Supermercados Argentina',
  description: 'Comparación de precios en La Anónima, Chango Más, Carrefour, Maxi Consumo, Jumbo y La Coope en Casa.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Instrument+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/app.css" />
        <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}