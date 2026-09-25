import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { AspectImage } from '../components/AspectImage';
import { BuyButton } from '../components/BuyButton';
import { HeroProductBlock } from '../components/HeroProductBlock';
import { Reveal } from '../components/Reveal';
import { ScreenScroll } from '../components/ScreenScroll';
import { SectionTitle } from '../components/SectionTitle';
import { WhatMakesIphoneSection } from '../components/WhatMakesIphoneSection';
import { colors } from '../theme/colors';
import { layout, type } from '../theme/layout';
import { revealScale } from '../motion/presets';

const guidedTourBg = require('../../assets/images/guided-tour-bg-17f807.png');

const products = [
  {
    id: '14',
    badge: 'New',
    logo: require('../../assets/images/iphone-14-logo-56586a.png'),
    hero: require('../../assets/images/iphone-14-hero-56586a.png'),
    headline: 'Two great sizes.\nNow with a splash of yellow.',
    price: 'From $799 or $33.29/mo. for 24 mo.',
    bg: colors.white,
  },
  {
    id: '14-pro',
    logo: require('../../assets/images/iphone-14-pro-logo-56586a.png'),
    hero: require('../../assets/images/iphone-14-pro-hero-56586a.png'),
    headline: 'Pro. Beyond.',
    price: 'From $999 or $41.62/mo. for 24 mo.',
    bg: colors.black,
    light: true,
  },
  {
    id: 'se',
    logo: require('../../assets/images/iphone-se-logo-56586a.png'),
    hero: require('../../assets/images/iphone-se-hero-56586a.png'),
    headline: 'Love the power.\nLove the price.',
    price: 'From $429 or $17.87/mo. for 24 mo.',
    bg: colors.bgLighter,
  },
];

export function HomeScreen() {
  return (
    <ScreenScroll style={styles.container} contentContainerStyle={styles.content}>
      <Reveal variant="fade">
        <LinearGradient
          colors={['#F5F5F7', '#FBFBFD', '#F5F5F7']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.promoBanner}
        >
          <Text style={styles.promoText}>
            Get $200–$600 in credit toward iPhone 14 or iPhone 14 Pro when you trade in iPhone 11
            or higher.
          </Text>
        </LinearGradient>
      </Reveal>

      {products.map((product, index) => (
        <HeroProductBlock key={product.id} index={index} {...product} />
      ))}

      <Animated.View entering={revealScale(200)} style={styles.guidedTour}>
        <AspectImage source={guidedTourBg} resizeMode="cover" />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.55)']}
          style={styles.guidedTourOverlay}
        >
          <View style={styles.guidedTourContent}>
            <Text style={styles.guidedEyebrow}>A Guided Tour of</Text>
            <Text style={styles.guidedTitle}>iPhone 14 &{'\n'}iPhone 14 Pro</Text>
            <BuyButton label="Watch the film" centered animated />
          </View>
        </LinearGradient>
      </Animated.View>

      <View style={styles.whatMakes}>
        <SectionTitle>What makes an iPhone an iPhone?</SectionTitle>
        <WhatMakesIphoneSection />
      </View>
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
    paddingBottom: 8,
  },
  promoBanner: {
    paddingVertical: 14,
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
  guidedTour: {
    marginHorizontal: layout.screenPaddingX - 4,
    marginTop: 8,
    borderRadius: layout.cardRadius,
    overflow: 'hidden',
    position: 'relative',
  },
  guidedTourOverlay: {
    ...StyleSheet.absoluteFill,
    justifyContent: 'flex-end',
  },
  guidedTourContent: {
    paddingHorizontal: 28,
    paddingVertical: 32,
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
  whatMakes: {
    marginTop: 32,
    paddingHorizontal: layout.screenPaddingX - 4,
  },
});
