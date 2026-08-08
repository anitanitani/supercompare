import { scrapeCarrefour } from '../../../../lib/scrapers/carrefour';
import { scrapeJumbo } from '../../../../lib/scrapers/jumbo';
import { scrapeChango } from '../../../../lib/scrapers/chango';
import { scrapeAnonima } from '../../../../lib/scrapers/anonima';
import { scrapeMaxi } from '../../../../lib/scrapers/maxi';
import { scrapeCoope } from '../../../../lib/scrapers/coope';
import { getSupabaseAdmin } from '../../../../lib/supabase';
import { diceCoefficient } from '../../../../lib/scraper-utils';

const SCRAPERS = {
  carrefour: scrapeCarrefour,
  jumbo: scrapeJumbo,
  chango: scrapeChango,
  anonima: scrapeAnonima,
  maxi: scrapeMaxi,
  coope: scrapeCoope,
};

async function scrapeOneSupermarket(id, scraperFn, searchTerm) {
  try {
    const results = await scraperFn(searchTerm);
    return { id, ok: true, results, error: null };
  } catch (err) {
    return { id, ok: false, results: [], error: err.message };
  }
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Body JSON invalido' }, { status: 400 });
  }

  const products = body.products || [];

  if (!products.length) {
    return Response.json({ error: 'No se enviaron productos' }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  const finalResults = {};
  const scraperErrors = {};

  for (const product of products) {
    const searchTerm = product.busqueda || product.nombre;
    const promises = Object.entries(SCRAPERS).map(([id, fn]) =>
      scrapeOneSupermarket(id, fn, searchTerm)
    );
    const supermarketResults = await Promise.all(promises);
    finalResults[product.slug] = {};

    for (const sr of supermarketResults) {
      if (!sr.ok) {
        scraperErrors[sr.id] = sr.error;
        finalResults[product.slug][sr.id] = null;
        continue;
      }

      let best = null;
      let bestScore = 0;
      for (const item of sr.results) {
        const score = diceCoefficient(item.nombre, product.nombre);
        if (score > bestScore) { best = item; bestScore = score; }
      }

      const chosen = best || sr.results[0] || null;
      finalResults[product.slug][sr.id] = chosen
        ? { ...chosen, match_score: bestScore }
        : null;

      if (chosen && supabase) {
        try {
          await supabase.from('precios_scrapeados').insert({
            producto_slug: product.slug,
            producto_nombre_buscado: product.nombre,
            supermercado: sr.id,
            nombre_encontrado: chosen.nombre,
            precio_regular: chosen.precio_regular,
            precio_oferta: chosen.precio_oferta,
            url_producto: chosen.url_producto,
            scrapeado_at: new Date().toISOString(),
          });
        } catch (dbErr) {
          console.error('Error guardando en Supabase:', dbErr.message);
        }
      }
    }
  }

  return Response.json({
    results: finalResults,
    errors: scraperErrors,
    scraped_at: new Date().toISOString(),
  });
}