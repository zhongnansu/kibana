import { NavigationPublicPluginStart } from '../../../../src/plugins/navigation/public';


export interface DownloadButtonPluginSetup {
  getGreeting: () => string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DownloadButtonPluginStart {}

export interface AppPluginStartDependencies {
  navigation: NavigationPublicPluginStart;
}
