import { Image, ImageSourcePropType } from 'react-native';

/** Width / height from a bundled `require()` asset (works on native and Expo web). */
export function assetAspect(source: ImageSourcePropType, fallback = 16 / 9): number {
  const resolved = Image.resolveAssetSource(source);
  if (resolved?.width && resolved?.height) {
    return resolved.width / resolved.height;
  }
  return fallback;
}
