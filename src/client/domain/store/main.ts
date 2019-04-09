import { createAtom } from 'js-atom';

export type HomePage = { name: 'HOME_PAGE' };

export type DetailPage = { name: 'DETAIL_PAGE' };

export type Page = HomePage | DetailPage;

export type State = {
  xss: string;
  currentPage: Page;
};

const defaultState: State = {
  xss: '</script><script>alert(window)</script>',
  currentPage: { name: 'HOME_PAGE' }
};

let store;

export const createStore = () => {
  const state = (typeof window !== 'undefined' && window['$EXO']) ? window['$EXO'].state : defaultState;
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
