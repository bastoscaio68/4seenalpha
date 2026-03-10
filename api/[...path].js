export default async function handler(req, res) {
  const path = req.url.replace(/^\/api/, '');
  const target = `http://69.6.251.132:8080/api${path}`;
  try {
    const response = await fetch(target);
    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(data);
  } catch (e) {
    res.status(502).json({ error: 'upstream failed', detail: e.message });
  }
}
