/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { createAtom } from 'js-atom';

export type HomePage = { name: 'HOME_PAGE' };

export type DetailPage = { name: 'DETAIL_PAGE' };

export type Page = HomePage | DetailPage;

export type State = {
  currentPage: Page;
};

const defaultState: State = {
  currentPage: { name: 'HOME_PAGE' }
};

let store;

export const createStore = () => {
  const state = (typeof window !== 'undefined' && window['$RRK'])
  ? window['$RRK'].state : defaultState;
  store = createAtom(state);
}

export const subscribe = (name, handler) => {
  if (store) {
    store.addWatch(name, handler);
  }
};

export const swap = (handler) => {
  if (store) {
    store.swap(handler);
  }
};

export const getState = () => {
  if (store) {
    return store.deref();
  }
}
