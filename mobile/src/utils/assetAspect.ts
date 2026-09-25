import { Image, ImageSourcePropType } from 'react-native';

type SizedSource = { width?: number; height?: number };

/** Width / height from a bundled `require()` asset (native + Expo web export). */
export function assetAspect(source: ImageSourcePropType, fallback = 16 / 9): number {
  if (source && typeof source === 'object') {
    const sized = source as SizedSource;
    if (sized.width && sized.height) {
      return sized.width / sized.height;
    }
  }

  const resolve = Image.resolveAssetSource as
    | ((src: ImageSourcePropType) => SizedSource | undefined)
    | undefined;

  if (typeof resolve === 'function') {
    const resolved = resolve(source);
    if (resolved?.width && resolved?.height) {
      return resolved.width / resolved.height;
    }
  }

  return fallback;
}
