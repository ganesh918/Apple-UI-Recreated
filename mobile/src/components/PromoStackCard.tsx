import { Image, ImageProps, ImageSourcePropType, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { AspectImage } from './AspectImage';
import { LearnMoreLink } from './LearnMoreLink';
import { colors } from '../theme/colors';
import { layout, type } from '../theme/layout';

type Link = { label: string; light?: boolean };

type Props = {
  title?: string;
  body?: string;
  logo?: ImageSourcePropType;
  logoWidth?: number;
  logoHeight?: number;
  media: ImageSourcePropType;
  mediaAspect?: number;
  mediaResizeMode?: ImageProps['resizeMode'];
  links?: Link[];
  style?: ViewStyle;
};

/** Copy on white, artwork below — avoids overlapping text on composite Figma exports. */
export function PromoStackCard({
  title,
  body,
  logo,
  logoWidth = 160,
  logoHeight = 36,
  media,
  mediaAspect,
  mediaResizeMode = 'contain',
  links = [{ label: 'Learn more' }],
  style,
}: Props) {
  return (
    <View style={[styles.card, style]}>
      <View style={styles.copy}>
        {logo ? (
          <Image
            source={logo}
            style={{ width: logoWidth, height: logoHeight, marginBottom: 12 }}
            resizeMode="contain"
          />
        ) : null}
        {title ? <Text style={styles.title}>{title}</Text> : null}
        {body ? <Text style={styles.body}>{body}</Text> : null}
        <View style={styles.links}>
          {links.map((link) => (
            <LearnMoreLink key={link.label} label={link.label} light={link.light} />
          ))}
        </View>
      </View>
      <AspectImage
        source={media}
        aspectRatio={mediaAspect}
        resizeMode={mediaResizeMode}
        containerStyle={styles.mediaWrap}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    alignSelf: 'stretch',
    backgroundColor: colors.white,
    borderRadius: layout.cardRadius,
    marginBottom: layout.sectionGap,
    overflow: 'hidden',
  },
  copy: {
    width: '100%',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 20,
    alignItems: 'center',
  },
  title: {
    width: '100%',
    maxWidth: 420,
    fontSize: 26,
    lineHeight: 32,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.textPrimary,
    marginBottom: 10,
  },
  body: {
    width: '100%',
    maxWidth: 400,
    ...type.body,
    textAlign: 'center',
    color: colors.textPrimary,
    marginBottom: 14,
  },
  links: {
    width: '100%',
    alignItems: 'center',
    gap: 10,
  },
  mediaWrap: {
    backgroundColor: colors.bgLighter,
  },
});
