export default eventHandler(() => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>MS Blog Backend</title>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  </head>
  <body class="bg-gray-100 flex items-center justify-center h-screen">
      <div class="text-center">
          <h1 class="text-4xl font-bold text-blue-700 mb-4">MS Blog Backend</h1>
          <p class="text-lg text-gray-700">Deployed with <b>Vercel</b> & Provided on <b>Supabase</b> </p>
      </div>
  </body>
  </html>
`;
});
