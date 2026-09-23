import { Image, ImageSourcePropType, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { LearnMoreLink } from './LearnMoreLink';
import { colors } from '../theme/colors';
import { layout, type } from '../theme/layout';

type LinkAction = { label: string; light?: boolean };

type Props = {
  title: string;
  body?: string;
  image: ImageSourcePropType;
  imageAspect?: number;
  links?: LinkAction[];
  style?: ViewStyle;
};

export function CopyImageCard({
  title,
  body,
  image,
  imageAspect = 675 / 357,
  links = [{ label: 'Learn more' }],
  style,
}: Props) {
  return (
    <View style={[styles.card, style]}>
      <View style={styles.copy}>
        <Text style={styles.title}>{title}</Text>
        {body ? <Text style={styles.body}>{body}</Text> : null}
        <View style={styles.links}>
          {links.map((link) => (
            <LearnMoreLink key={link.label} label={link.label} light={link.light} />
          ))}
        </View>
      </View>
      <View style={styles.mediaWrap}>
        <Image
          source={image}
          style={[styles.image, { aspectRatio: imageAspect }]}
          resizeMode="contain"
        />
      </View>
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
    paddingBottom: 16,
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
    marginBottom: 12,
  },
  links: {
    width: '100%',
    alignItems: 'center',
    gap: 10,
  },
  mediaWrap: {
    width: '100%',
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    maxWidth: '100%',
  },
});
