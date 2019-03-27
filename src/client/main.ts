/*
 * Rakuten React kit
 *
 * Copyright © 2017 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { createStore, subscribe } from 'client/domain/store/main';
import render from 'client/renderer';
import startRouters from 'client/domain/middleware/router';

createStore();
subscribe('renderLoop', render);
startRouters();
