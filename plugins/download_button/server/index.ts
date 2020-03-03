import { PluginInitializerContext } from '../../../src/core/server';
import { DownloadButtonPlugin } from './plugin';

//  This exports static code and TypeScript types,
//  as well as, Kibana Platform `plugin()` initializer.

export function plugin(initializerContext: PluginInitializerContext) {
  return new DownloadButtonPlugin(initializerContext);
}

export { DownloadButtonPluginSetup, DownloadButtonPluginStart } from './types';
