import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInRight } from 'react-native-reanimated';
import { BuyButton } from '../components/BuyButton';
import { LearnMoreLink } from '../components/LearnMoreLink';
import { Reveal } from '../components/Reveal';
import { ScreenScroll } from '../components/ScreenScroll';
import { colors } from '../theme/colors';
import { layout, type } from '../theme/layout';
import { easeOut, staggerDelay } from '../motion/presets';

const models = [
  {
    name: 'iPhone 14 Pro',
    tagline: 'The ultimate iPhone.',
    price: 'From $999',
    phone: require('../../assets/images/compare-14-pro-56586a.png'),
    logo: require('../../assets/images/compare-14-pro-logo-56586a.png'),
    isNew: true,
  },
  {
    name: 'iPhone 14',
    tagline: 'A total powerhouse.',
    price: 'From $799*',
    phone: require('../../assets/images/compare-14-56586a.png'),
    logo: require('../../assets/images/compare-14-logo-56586a.png'),
    isNew: true,
  },
  {
    name: 'iPhone 13',
    tagline: 'As amazing as ever.',
    price: 'From $599*',
    phone: require('../../assets/images/compare-13-56586a.png'),
    logo: require('../../assets/images/compare-13-logo-56586a.png'),
  },
  {
    name: 'iPhone SE',
    tagline: 'Serious power. Serious value.',
    price: 'From $429',
    phone: require('../../assets/images/compare-se-56586a.png'),
    logo: require('../../assets/images/compare-se-logo-56586a.png'),
  },
];

export function CompareScreen() {
  return (
    <ScreenScroll style={styles.container} contentContainerStyle={styles.content}>
      <Reveal variant="down">
        <Text style={styles.title}>Which iPhone is right for you?</Text>
      </Reveal>

      <ScrollView
        horizontal
        nestedScrollEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.row}
        style={styles.carousel}
        decelerationRate="fast"
        snapToInterval={276}
      >
        {models.map((model, index) => (
          <Animated.View
            key={model.name}
            entering={FadeInRight.duration(650)
              .delay(staggerDelay(index, 85))
              .easing(easeOut)}
            style={styles.card}
          >
            {model.isNew ? <Text style={styles.new}>New</Text> : <View style={styles.newSpacer} />}
            <Image source={model.phone} style={styles.phone} resizeMode="contain" />
            <Image source={model.logo} style={styles.logo} resizeMode="contain" />
            <Text style={styles.tagline}>{model.tagline}</Text>
            <Text style={styles.price}>{model.price}</Text>
            <View style={styles.cardActions}>
              <BuyButton small centered animated />
              <LearnMoreLink />
            </View>
          </Animated.View>
        ))}
      </ScrollView>

      <Reveal variant="up" delay={120}>
        <View style={styles.footerLinks}>
          <LearnMoreLink label="Compare all iPhone models" />
          <LearnMoreLink label="Shop iPhone" />
        </View>
      </Reveal>
    </ScreenScroll>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgPage,
  },
  content: {
    paddingTop: 28,
    width: '100%',
    maxWidth: layout.maxContentWidth + 40,
    alignSelf: 'center',
    alignItems: 'stretch',
  },
  title: {
    ...type.sectionTitle,
    textAlign: 'center',
    color: colors.textPrimary,
    paddingHorizontal: layout.screenPaddingX,
    marginBottom: 28,
  },
  carousel: {
    flexGrow: 0,
  },
  row: {
    paddingHorizontal: layout.screenPaddingX,
    paddingBottom: 4,
    gap: 16,
  },
  card: {
    width: 260,
    backgroundColor: colors.white,
    borderRadius: layout.cardRadius,
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 5,
  },
  new: {
    color: colors.new,
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 8,
    minHeight: 16,
  },
  newSpacer: {
    height: 24,
  },
  phone: {
    width: 132,
    height: 178,
    marginBottom: 16,
  },
  logo: {
    height: 24,
    width: 140,
    marginBottom: 10,
  },
  tagline: {
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
    color: colors.textPrimary,
    marginBottom: 6,
    lineHeight: 22,
  },
  price: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 16,
    lineHeight: 20,
  },
  cardActions: {
    alignItems: 'center',
    gap: 12,
    width: '100%',
  },
  footerLinks: {
    marginTop: 32,
    paddingHorizontal: layout.screenPaddingX,
    gap: 16,
    alignItems: 'center',
    paddingBottom: 8,
  },
});
