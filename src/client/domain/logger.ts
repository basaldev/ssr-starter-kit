/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as Logger from 'js-logger';

Logger.useDefaults();

export function getLogger(name: string) {
  return Logger.get(name);
}
