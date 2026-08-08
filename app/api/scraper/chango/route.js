import { scrapeChango } from '../../../../lib/scrapers/chango';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q') || 'leche';
  try {
    const results = await scrapeChango(q);
    return Response.json({ supermercado: 'chango', query: q, count: results.length, results });
  } catch (err) {
    return Response.json({ supermercado: 'chango', query: q, error: err.message, results: [] }, { status: 200 });
  }
}