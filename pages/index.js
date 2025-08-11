export default function Home() {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="RA" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <title>RA App</title>
        <style>{`
          html, body {
            margin: 0; padding: 0; height: 100%;
            background: #111;
            overflow: hidden;
          }
          iframe {
            border: none;
            width: 100vw;
            height: 100vh;
            display: block;
          }
        `}</style>
      </head>
      <body>
        <iframe src="/api/" allowFullScreen></iframe>
      </body>
    </html>
  );
}
