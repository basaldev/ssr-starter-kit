/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import page from 'page';
import Routing from 'shared/routing';
import { getLogger } from 'client/domain/logger';
import { updateCurrentPage } from 'client/domain/store/reducers/main';

type Context = { params: { name: string } };

const logger = getLogger('Middleware/router');

export default function startRouters() {
  Object.keys(Routing).forEach(path => {
    page(path, (ctx: Context) => {
      logger.debug(path);
      updateCurrentPage(Routing[path]);
    });
  });

  page();
}
