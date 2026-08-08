import { scrapeAnonima } from '../../../../lib/scrapers/anonima';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q') || 'leche';
  try {
    const results = await scrapeAnonima(q);
    return Response.json({ supermercado: 'anonima', query: q, count: results.length, results });
  } catch (err) {
    return Response.json({ supermercado: 'anonima', query: q, error: err.message, results: [] }, { status: 200 });
  }
}