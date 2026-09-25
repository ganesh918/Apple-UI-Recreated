import { Platform } from 'react-native';

/** System stack close to Apple.com marketing pages. */
export const fontFamily = Platform.select({
  ios: 'System',
  android: 'sans-serif',
  default:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
});
