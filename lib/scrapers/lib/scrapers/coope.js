import * as cheerio from 'cheerio';
import { fetchWithRetry, parsePrice } from '../scraper-utils';

const BASE_URL = 'https://www.lacoopeencasa.coop';

export async function scrapeCoope(searchTerm) {
  const results = [];

  const url = `${BASE_URL}/buscar?q=${encodeURIComponent(searchTerm)}`;
  const res = await fetchWithRetry(url, {
    headers: { Accept: 'text/html,application/xhtml+xml' }
  });
  const html = await res.text();
  const $ = cheerio.load(html);

  const cardSelectors = [
    '.product-card', '.card-producto',
    '[class*="ProductCard"]', '.item-producto',
    'article.product', '.product-item', '.producto',
  ];

  let cards = $();
  for (const sel of cardSelectors) {
    const found = $(sel);
    if (found.length > 0) { cards = found; break; }
  }

  cards.each((i, el) => {
    if (i >= 10) return;
    const card = $(el);

    const nombre =
      card.find('[class*="name"], [class*="title"], h2, h3').first().text().trim() ||
      card.attr('data-name');

    const precioTexto =
      card.find('[class*="price"]:not([class*="old"]):not([class*="before"])').first().text().trim() ||
      card.find('[class*="precio"]:not([class*="anterior"])').first().text().trim();

    const precioAnteriorTexto =
      card.find('[class*="old-price"], [class*="precio-anterior"]').first().text().trim();

    const imagen = card.find('img').first().attr('src') || card.find('img').first().attr('data-src');
    const link = card.find('a').first().attr('href');

    if (!nombre || !precioTexto) return;

    const precioOferta = parsePrice(precioTexto);
    const precioRegular = parsePrice(precioAnteriorTexto) || precioOferta;
    if (!precioOferta) return;

    results.push({
      nombre, marca: null,
      precio_regular: precioRegular,
      precio_oferta: precioOferta,
      disponible: true,
      imagen_url: imagen ? new URL(imagen, BASE_URL).toString() : null,
      url_producto: link ? new URL(link, BASE_URL).toString() : null,
      ean: null,
    });
  });

  if (!results.length) {
    throw new Error('Sin resultados en La Coope — probablemente requiere login para ver precios.');
  }

  return results;
}