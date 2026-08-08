// Reintenta un fetch hasta 2 veces si falla por red
export async function fetchWithRetry(url, options = {}, retries = 2) {
  const defaultHeaders = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept-Language': 'es-AR,es;q=0.9',
    'Accept-Encoding': 'gzip, deflate, br',
    ...options.headers,
  };

  for (let i = 0; i <= retries; i++) {
    try {
      const res = await fetch(url, {
        ...options,
        headers: defaultHeaders,
        signal: AbortSignal.timeout(8000),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status} en ${url}`);
      return res;
    } catch (err) {
      if (i === retries) throw err;
      await new Promise(r => setTimeout(r, 500 * (i + 1)));
    }
  }
}

// Convierte texto de precio argentino a número
// Ejemplos: "$1.234,56" -> 1234.56 | "$ 890" -> 890
export function parsePrice(text) {
  if (!text && text !== 0) return null;
  if (typeof text === 'number') return text;
  const cleaned = String(text)
    .replace(/[^\d,\.]/g, '')
    .replace(/\.(?=\d{3})/g, '')
    .replace(',', '.');
  const num = parseFloat(cleaned);
  return isNaN(num) ? null : num;
}

// Similitud entre dos strings (coeficiente de Dice)
// Devuelve un número entre 0 (nada similar) y 1 (idénticos)
export function diceCoefficient(a, b) {
  if (!a || !b) return 0;
  const s1 = a.toLowerCase().trim();
  const s2 = b.toLowerCase().trim();
  if (s1 === s2) return 1;
  if (s1.length < 2 || s2.length < 2) return 0;

  const bigrams1 = new Map();
  for (let i = 0; i < s1.length - 1; i++) {
    const bg = s1.slice(i, i + 2);
    bigrams1.set(bg, (bigrams1.get(bg) || 0) + 1);
  }

  let intersect = 0;
  for (let i = 0; i < s2.length - 1; i++) {
    const bg = s2.slice(i, i + 2);
    if (bigrams1.get(bg) > 0) {
      intersect++;
      bigrams1.set(bg, bigrams1.get(bg) - 1);
    }
  }

  return (2 * intersect) / (s1.length + s2.length - 2);
}