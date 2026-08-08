export async function POST(request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: 'ANTHROPIC_API_KEY no configurada', fallback: true },
      { status: 200 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Body JSON inválido' }, { status: 400 });
  }

  const { prompt } = body;
  if (!prompt || typeof prompt !== 'string') {
    return Response.json({ error: 'Falta el campo prompt' }, { status: 400 });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 800,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('[ai-analysis] Error Anthropic:', response.status, errText);
      return Response.json({ error: 'Error de API', fallback: true }, { status: 200 });
    }

    const data = await response.json();
    const text = data.content?.find((b) => b.type === 'text')?.text || '';
    return Response.json({ text });

  } catch (err) {
    console.error('[ai-analysis] Error de red:', err.message);
    return Response.json({ error: err.message, fallback: true }, { status: 200 });
  }
}