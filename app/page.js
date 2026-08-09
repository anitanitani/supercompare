import { readFileSync } from 'fs';
import { join } from 'path';

export default function Page() {
  const html = readFileSync(join(process.cwd(), 'public', 'index.html'), 'utf-8');
  const body = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)?.[1] ?? '';
  return (
    <div
      dangerouslySetInnerHTML={{ __html: body }}
      suppressHydrationWarning
    />
  );
}