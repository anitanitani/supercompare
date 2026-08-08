import { scrapeJumbo } from '../../../../lib/scrapers/jumbo';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q') || 'leche';
  try {
    const results = await scrapeJumbo(q);
    return Response.json({ supermercado: 'jumbo', query: q, count: results.length, results });
  } catch (err) {
    return Response.json({ supermercado: 'jumbo', query: q, error: err.message, results: [] }, { status: 200 });
  }
}