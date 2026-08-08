import { scrapeMaxi } from '../../../../lib/scrapers/maxi';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q') || 'leche';
  try {
    const results = await scrapeMaxi(q);
    return Response.json({ supermercado: 'maxi', query: q, count: results.length, results });
  } catch (err) {
    return Response.json({ supermercado: 'maxi', query: q, error: err.message, results: [] }, { status: 200 });
  }
}