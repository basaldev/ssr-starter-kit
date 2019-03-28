export default ({ content, state }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>SSR Starter kit</title>
    </head>
    <body>
      <div id="app">${content}</div>
      <script>var $EXO_STATE = ${JSON.stringify(state)};</script>
      <script src="/client/bundle.js"></script>
    </body>
  </html>
`;
