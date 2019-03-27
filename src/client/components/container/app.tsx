/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved. *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * BOF: src/components/app.jsx
 * This file defines the 'app' component and how it will be rendered.
 */

import * as React from 'react';
import { getState } from 'client/domain/store/main';
import { HomePage } from 'client/components/container/HomePage';
import { DetailPage } from 'client/components/container/DetailPage';
import { Notfound } from 'client/components/container/Notfound';
import { Nav } from 'client/components/presentational/Nav';

function getPage(state) {
  if (!state) {
    return <Notfound />;
  }
  switch (state.currentPage.name) {
    case 'HOME_PAGE':
      return <HomePage />;
    case 'DETAIL_PAGE':
      return <DetailPage />;
    default:
      return <Notfound />;
  }
}

export function App() {
  const state = getState();
  const content = getPage(state);
  return (
    <>
      <Nav />
      <div>{content}</div>
    </>
  );
}
