import { readFileSync } from 'fs';
import { join } from 'path';

export const dynamic = 'force-static';

export default function Page() {
  const html = readFileSync(
    join(process.cwd(), 'public', 'index.html'),
    'utf-8'
  );

  const body = html
    .match(/<body[^>]*>([\s\S]*)<\/body>/i)?.[1] ?? '';

  return (
    <>
      <div
        id="app-root"
        dangerouslySetInnerHTML={{ __html: body }}
        suppressHydrationWarning={true}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            var s = document.createElement('script');
            s.src = '/app.js';
            document.head.appendChild(s);
          `
        }}
      />
    </>
  );
}