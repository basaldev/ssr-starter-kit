/**
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { getLogger } from 'client/domain/logger';

const logger = getLogger('Renderer');

export default async function render() {
  logger.time('DOM Render');
  const App = (await import('client/components/container/app')).App;
  ReactDOM.render(<App />, document.getElementById('app'));
  logger.timeEnd('DOM Rendered');
}

declare const module: {
  hot: {
    accept: (string, Function) => void
  }
};

if (module.hot) {
  module.hot.accept('client/components/container/app', () => {
    logger.time('Hot update applied');
    render();
    logger.timeEnd('Hot update applied');
  });
}
