import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { AspectImage } from './AspectImage';
import { BuyButton } from './BuyButton';
import { LearnMoreLink } from './LearnMoreLink';
import { colors } from '../theme/colors';
import { layout, type } from '../theme/layout';
import { heroEntrance, revealScale, staggerDelay } from '../motion/presets';

type Props = {
  index: number;
  badge?: string;
  logo: ImageSourcePropType;
  hero: ImageSourcePropType;
  headline: string;
  price: string;
  bg: string;
  light?: boolean;
};

export function HeroProductBlock({
  index,
  badge,
  logo,
  hero,
  headline,
  price,
  bg,
  light,
}: Props) {
  const copyDelay = staggerDelay(index, 120);
  const imageDelay = copyDelay + 100;

  return (
    <View style={[styles.hero, { backgroundColor: bg }]}>
      <Animated.View entering={heroEntrance(copyDelay)} style={styles.heroCopy}>
        {badge ? <Text style={styles.newBadge}>{badge}</Text> : null}
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        <Text style={[styles.headline, light && styles.textLight]}>{headline}</Text>
        <Text style={[styles.price, light && styles.textLightMuted]}>{price}</Text>
        <View style={styles.ctaRow}>
          <BuyButton centered animated />
          <LearnMoreLink light={light} />
        </View>
      </Animated.View>
      <Animated.View entering={revealScale(imageDelay)}>
        <AspectImage source={hero} resizeMode="contain" containerStyle={styles.heroImageWrap} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    marginBottom: layout.sectionGap,
    overflow: 'hidden',
  },
  heroCopy: {
    paddingTop: 36,
    paddingHorizontal: layout.screenPaddingX,
    paddingBottom: 8,
    alignItems: 'center',
    maxWidth: layout.maxContentWidth,
    alignSelf: 'center',
    width: '100%',
  },
  newBadge: {
    color: colors.new,
    fontSize: 21,
    fontWeight: '600',
    marginBottom: 8,
    letterSpacing: -0.02 * 21,
  },
  logo: {
    height: 28,
    width: 180,
    marginBottom: 14,
  },
  headline: {
    ...type.heroHeadline,
    textAlign: 'center',
    color: colors.textPrimary,
    marginBottom: 10,
  },
  textLight: {
    color: colors.bgLight,
  },
  textLightMuted: {
    color: 'rgba(245, 245, 247, 0.88)',
  },
  price: {
    ...type.body,
    textAlign: 'center',
    color: colors.textPrimary,
    marginBottom: 18,
  },
  ctaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 8,
  },
  heroImageWrap: {
    marginTop: 4,
    paddingHorizontal: 4,
  },
});
