
import * as Express from 'express';
import * as React from 'react';
import { renderToString } from "react-dom/server";
// import Routing from 'shared/routing';
import { createStore } from 'client/domain/store/main';
// import { updateCurrentPage } from 'client/domain/store/reducers/main';
import { App } from 'client/components/container/app';

const app = Express();

// function getRouteState(path) {
//   return Routing[path] || Routing['*'];
// }

app.get('*', (req, res) => {
  createStore();
  // const routeState = getRouteState(req.url);
  // updateCurrentPage(routeState)
  const reactDom = renderToString(<App />);
  res.write('<html><body>');
  res.write(reactDom);
  res.write('</body></html>');
  res.end();
});

export default app;
