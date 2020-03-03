import './index.scss';

import { DownloadButtonPlugin } from './plugin';

// This exports static code and TypeScript types,
// as well as, Kibana Platform `plugin()` initializer.
export function plugin() {
  return new DownloadButtonPlugin();
}
export { DownloadButtonPluginSetup, DownloadButtonPluginStart } from './types';
