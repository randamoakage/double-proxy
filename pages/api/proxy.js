export default async function handler(req, res) {
  const targetUrl = "https://retroachievements.org" + req.url.replace(/^\/api\/proxy/, "");
  
  try {
    const resp = await fetch(targetUrl, {
      method: req.method,
      headers: { 
        ...req.headers,
        host: "retroachievements.org"
      }
    });
    
    // Copy status & headers
    res.status(resp.status);
    resp.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    // Send body
    const body = await resp.arrayBuffer();
    res.send(Buffer.from(body));

  } catch (err) {
    res.status(500).send("Proxy Error: " + err.message);
  }
}
