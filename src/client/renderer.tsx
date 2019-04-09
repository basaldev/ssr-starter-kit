import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { getLogger } from 'client/domain/logger';

const logger = getLogger('Renderer');

export default async function render() {
  logger.time('DOM Render');
  const App = (await import('client/components/container/App')).App;
  ReactDOM.hydrate(<App />, document.getElementById('app'));
  logger.timeEnd('DOM Rendered');
}

declare const module: {
  hot: {
    accept: (string, Function) => void
  }
};

if (module.hot) {
  module.hot.accept('client/components/container/App', () => {
    logger.time('Hot update applied');
    render();
    logger.timeEnd('Hot update applied');
  });
}
