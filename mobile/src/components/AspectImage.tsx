import {
  Image,
  ImageProps,
  ImageSourcePropType,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { assetAspect } from '../utils/assetAspect';

export type AspectImageProps = {
  source: ImageSourcePropType;
  /** When omitted, derived from the asset via `Image.resolveAssetSource`. */
  aspectRatio?: number;
  resizeMode?: ImageProps['resizeMode'];
  maxHeight?: number;
  containerStyle?: ViewStyle;
  style?: ImageProps['style'];
};

/**
 * Full-width image with a stable height on native and React Native Web
 * (avoids collapsed `<img>` when only `aspectRatio` is set on Image).
 */
export function AspectImage({
  source,
  aspectRatio,
  resizeMode = 'contain',
  maxHeight,
  containerStyle,
  style,
}: AspectImageProps) {
  const ratio = aspectRatio ?? assetAspect(source);

  return (
    <View
      style={[
        styles.frame,
        { aspectRatio: ratio },
        maxHeight != null && { maxHeight },
        containerStyle,
      ]}
    >
      <Image source={source} style={[styles.image, style]} resizeMode={resizeMode} />
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    width: '100%',
    alignSelf: 'stretch',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
