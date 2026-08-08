import { scrapeCoope } from '../../../../lib/scrapers/coope';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q') || 'leche';
  try {
    const results = await scrapeCoope(q);
    return Response.json({ supermercado: 'coope', query: q, count: results.length, results });
  } catch (err) {
    return Response.json({ supermercado: 'coope', query: q, error: err.message, results: [] }, { status: 200 });
  }
}