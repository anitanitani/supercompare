import { readFileSync } from 'fs';
import { join } from 'path';

export const dynamic = 'force-static';

export default function RootLayout() {
  const html = readFileSync(join(process.cwd(), 'public', 'index.html'), 'utf-8');
  return (
    <html dangerouslySetInnerHTML={{ __html: html.replace('<html lang="es">', '').replace('</html>', '') }}
      lang="es"
      suppressHydrationWarning
    />
  );
}