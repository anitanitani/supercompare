# SuperCompare
import fs from 'fs';
import path from 'path';
import Script from 'next/script';

export const dynamic = 'force-static';

export default function HomePage() {
  const htmlPath = path.join(process.cwd(), 'public', 'index.html');
  const fullHtml = fs.readFileSync(htmlPath, 'utf-8');

  const bodyMatch = fullHtml.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const bodyContent = bodyMatch ? bodyMatch[1] : fullHtml;

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: bodyContent }} />
      <Script src="/app.js" strategy="afterInteractive" />
    </>
  );
}