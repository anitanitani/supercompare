import { scrapeCarrefour } from '../../../../lib/scrapers/carrefour';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q') || 'leche';
  try {
    const results = await scrapeCarrefour(q);
    return Response.json({ supermercado: 'carrefour', query: q, count: results.length, results });
  } catch (err) {
    return Response.json({ supermercado: 'carrefour', query: q, error: err.message, results: [] }, { status: 200 });
  }
}