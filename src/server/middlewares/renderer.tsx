import * as React from 'react';
import { renderToString } from "react-dom/server";
import Routing from 'shared/routing';
import { createStore, getState } from 'client/domain/store/main';
import { updateCurrentPage } from 'client/domain/store/reducers/main';
import { App } from 'client/components/container/App';

function getRouteState(path) {
  return Routing[path] || Routing['*'];
}

export default (req, res, next) => {
  const routeState = getRouteState(req.url);
  createStore();
  updateCurrentPage(routeState);
  const state = getState();
  const content = renderToString(<App />);
  req.client = { state, content };
  next();
};
