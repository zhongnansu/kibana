import {
  PluginInitializerContext,
  CoreSetup,
  CoreStart,
  Plugin,
  Logger,
} from '../../../src/core/server';

import { DownloadButtonPluginSetup, DownloadButtonPluginStart } from './types';
import { defineRoutes } from './routes';

export class DownloadButtonPlugin
  implements Plugin<DownloadButtonPluginSetup, DownloadButtonPluginStart> {
  private readonly logger: Logger;

  constructor(initializerContext: PluginInitializerContext) {
    this.logger = initializerContext.logger.get();
  }

  public setup(core: CoreSetup) {
    this.logger.debug('download_button: Setup');
    const router = core.http.createRouter();

    // Register server side APIs
    defineRoutes(router);
    // downloadRoutes(router);

    return {};
  }

  public start(core: CoreStart) {
    this.logger.debug('download_button: Started');
    return {};
  }

  public stop() {}
}
