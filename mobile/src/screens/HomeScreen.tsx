import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { BuyButton } from '../components/BuyButton';
import { LearnMoreLink } from '../components/LearnMoreLink';
import { ScreenScroll } from '../components/ScreenScroll';
import { colors } from '../theme/colors';
import { layout, type } from '../theme/layout';

const products = [
  {
    id: '14',
    badge: 'New',
    logo: require('../../assets/images/iphone-14-logo-56586a.png'),
    hero: require('../../assets/images/iphone-14-hero-56586a.png'),
    headline: 'Two great sizes.\nNow with a splash of yellow.',
    price: 'From $799 or $33.29/mo. for 24 mo.',
    bg: colors.white,
    heroAspect: 1.45,
  },
  {
    id: '14-pro',
    logo: require('../../assets/images/iphone-14-pro-logo-56586a.png'),
    hero: require('../../assets/images/iphone-14-pro-hero-56586a.png'),
    headline: 'Pro. Beyond.',
    price: 'From $999 or $41.62/mo. for 24 mo.',
    bg: colors.black,
    light: true,
    heroAspect: 1.35,
  },
  {
    id: 'se',
    logo: require('../../assets/images/iphone-se-logo-56586a.png'),
    hero: require('../../assets/images/iphone-se-hero-56586a.png'),
    headline: 'Love the power.\nLove the price.',
    price: 'From $429 or $17.87/mo. for 24 mo.',
    bg: colors.bgLighter,
    heroAspect: 1.55,
  },
];

export function HomeScreen() {
  return (
    <ScreenScroll style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.promoBanner}>
        <Text style={styles.promoText}>
          Get $200–$600 in credit toward iPhone 14 or iPhone 14 Pro when you trade in iPhone 11 or
          higher.
        </Text>
      </View>

      {products.map((product) => (
        <View
          key={product.id}
          style={[styles.hero, { backgroundColor: product.bg }]}
        >
          <View style={styles.heroCopy}>
            {product.badge ? (
              <Text style={styles.newBadge}>{product.badge}</Text>
            ) : null}
            <Image source={product.logo} style={styles.logo} resizeMode="contain" />
            <Text style={[styles.headline, product.light && styles.textLight]}>
              {product.headline}
            </Text>
            <Text style={[styles.price, product.light && styles.textLight]}>{product.price}</Text>
            <View style={styles.ctaRow}>
              <BuyButton centered />
              <LearnMoreLink light={product.light} />
            </View>
          </View>
          <Image
            source={product.hero}
            style={[styles.heroImage, { aspectRatio: product.heroAspect }]}
            resizeMode="contain"
          />
        </View>
      ))}

      <ImageBackground
        source={require('../../assets/images/guided-tour-bg-17f807.png')}
        style={styles.guidedTour}
        imageStyle={styles.guidedTourImage}
        resizeMode="cover"
      >
        <View style={styles.guidedTourScrim} />
        <View style={styles.guidedTourContent}>
          <Text style={styles.guidedEyebrow}>A Guided Tour of</Text>
          <Text style={styles.guidedTitle}>iPhone 14 &{'\n'}iPhone 14 Pro</Text>
          <BuyButton label="Watch the film" centered />
        </View>
      </ImageBackground>
    </ScreenScroll>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgPage,
  },
  content: {
    flexGrow: 1,
    width: '100%',
    alignItems: 'stretch',
  },
  promoBanner: {
    backgroundColor: colors.bgLight,
    paddingVertical: 12,
    paddingHorizontal: layout.screenPaddingX,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  promoText: {
    ...type.caption,
    textAlign: 'center',
    color: colors.textPrimary,
    maxWidth: layout.maxContentWidth,
    alignSelf: 'center',
  },
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
    height: 24,
    width: 160,
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
    columnGap: 20,
    rowGap: 12,
    marginBottom: 8,
  },
  heroImage: {
    width: '100%',
    maxHeight: 320,
    marginTop: 4,
  },
  guidedTour: {
    marginHorizontal: 16,
    marginTop: 8,
    borderRadius: layout.cardRadius,
    overflow: 'hidden',
    minHeight: 380,
    justifyContent: 'flex-end',
  },
  guidedTourImage: {
    borderRadius: layout.cardRadius,
  },
  guidedTourScrim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
  },
  guidedTourContent: {
    paddingHorizontal: 28,
    paddingVertical: 32,
    zIndex: 1,
    alignItems: 'flex-start',
  },
  guidedEyebrow: {
    color: colors.white,
    ...type.eyebrow,
    marginBottom: 6,
  },
  guidedTitle: {
    color: colors.white,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '700',
    marginBottom: 20,
  },
});
