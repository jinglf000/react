/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import type {SuspenseConfig} from 'react-reconciler/src/ReactFiberSuspenseConfig';

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 * Suspense 容器组件用于处理Promise版的组件加载
 */
const ReactCurrentBatchConfig = {
  suspense: (null: null | SuspenseConfig),
};

export default ReactCurrentBatchConfig;
