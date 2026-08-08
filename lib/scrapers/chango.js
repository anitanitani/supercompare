import { fetchWithRetry, parsePrice } from '../scraper-utils';

const BASE_URL = 'https://www.masonline.com.ar';

export async function scrapeChango(searchTerm) {
  const results = [];

  try {
    const url = `${BASE_URL}/api/catalog_system/pub/products/search?ft=${encodeURIComponent(searchTerm)}&_from=0&_to=9`;
    const res = await fetchWithRetry(url, { headers: { Accept: 'application/json' } });
    const data = await res.json();

    if (Array.isArray(data)) {
      for (const item of data) {
        const sku = item.items?.[0];
        const seller = sku?.sellers?.[0];
        const offer = seller?.commertialOffer;
        if (!offer) continue;

        results.push({
          nombre: item.productName,
          marca: item.brand || null,
          precio_regular: parsePrice(offer.ListPrice ?? offer.Price),
          precio_oferta: parsePrice(offer.Price),
          disponible: offer.IsAvailable ?? offer.AvailableQuantity > 0,
          imagen_url: sku?.images?.[0]?.imageUrl || null,
          url_producto: `${BASE_URL}/${item.linkText}/p`,
          ean: sku?.ean || null,
        });
      }
    }
  } catch (err) {
    console.error('[chango] Falló API clásica:', err.message);

    try {
      const url2 = `${BASE_URL}/api/io/_v/api/intelligent-search/product_search/${encodeURIComponent(searchTerm)}?count=9`;
      const res2 = await fetchWithRetry(url2, { headers: { Accept: 'application/json' } });
      const data2 = await res2.json();
      const products = data2?.products || [];

      for (const item of products) {
        const sku = item.items?.[0];
        const seller = sku?.sellers?.[0];
        const offer = seller?.commertialOffer;
        if (!offer) continue;

        results.push({
          nombre: item.productName,
          marca: item.brand || null,
          precio_regular: parsePrice(offer.ListPrice ?? offer.Price),
          precio_oferta: parsePrice(offer.Price),
          disponible: offer.IsAvailable ?? true,
          imagen_url: sku?.images?.[0]?.imageUrl || null,
          url_producto: `${BASE_URL}/${item.linkText}/p`,
          ean: sku?.ean || null,
        });
      }
    } catch (err2) {
      throw new Error('No se pudo obtener datos de Chango Más: ' + err2.message);
    }
  }

  return results;
}