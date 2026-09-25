import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import { LearnMoreLink } from './LearnMoreLink';
import { colors } from '../theme/colors';
import { layout, type } from '../theme/layout';

type Props = {
  background: ImageSourcePropType;
  logo?: ImageSourcePropType;
  logoWidth?: number;
  logoHeight?: number;
  title?: string;
  body: string;
  links?: { label: string; light?: boolean }[];
  dark?: boolean;
  minHeight?: number;
  style?: ViewStyle;
};

export function BannerCard({
  background,
  logo,
  logoWidth = 160,
  logoHeight = 36,
  title,
  body,
  links = [{ label: 'Learn more', light: true }],
  dark = true,
  minHeight = 320,
  style,
}: Props) {
  const lightText = dark;

  return (
    <ImageBackground
      source={background}
      style={[styles.card, { minHeight }, style]}
      imageStyle={styles.bgImage}
      resizeMode="cover"
    >
      <View style={[styles.scrim, dark && styles.scrimDark]} />
      <View style={styles.content}>
        {logo ? (
          <Image
            source={logo}
            style={{ width: logoWidth, height: logoHeight, marginBottom: 12 }}
            resizeMode="contain"
          />
        ) : null}
        {title ? (
          <Text style={[styles.title, lightText && styles.textLight]}>{title}</Text>
        ) : null}
        <Text style={[styles.body, lightText && styles.textLight]}>{body}</Text>
        <View style={styles.links}>
          {links.map((link) => (
            <LearnMoreLink key={link.label} label={link.label} light={link.light ?? lightText} />
          ))}
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: layout.cardRadius,
    marginHorizontal: layout.screenPaddingX - 4,
    marginBottom: layout.sectionGap,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  bgImage: {
    borderRadius: layout.cardRadius,
  },
  scrim: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
  scrimDark: {
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  content: {
    paddingHorizontal: 24,
    paddingVertical: 28,
    alignItems: 'center',
    zIndex: 1,
  },
  title: {
    fontSize: 26,
    lineHeight: 32,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.textPrimary,
    marginBottom: 10,
  },
  body: {
    ...type.body,
    textAlign: 'center',
    color: colors.textPrimary,
    marginBottom: 14,
  },
  textLight: {
    color: colors.white,
  },
  links: {
    alignItems: 'center',
    gap: 10,
  },
});
