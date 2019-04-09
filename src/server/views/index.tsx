import * as React from 'react';
import * as serialize from 'serialize-javascript';

const stringifyState = state => `
  window.$INIT_STATE = ${serialize(state)}
`;

export default ({ app, state }) =>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>SSR Starter kit</title>
    </head>
    <body>
      <div id="app">{app}</div>
      <script dangerouslySetInnerHTML={{ __html: stringifyState(state) }} />
      <script src="/client/bundle.js"></script>
    </body>
  </html>;
