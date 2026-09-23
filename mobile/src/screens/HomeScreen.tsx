import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { BuyButton } from '../components/BuyButton';
import { LearnMoreLink } from '../components/LearnMoreLink';
import { colors } from '../theme/colors';

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
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.promoBanner}>
        <Text style={styles.promoText}>
          Get $200–$600 in credit toward iPhone 14 or iPhone 14 Pro when you trade in iPhone 11 or higher.
        </Text>
      </View>

      {products.map((product) => (
        <View key={product.id} style={[styles.hero, { backgroundColor: product.bg }]}>
          {product.badge && <Text style={styles.newBadge}>{product.badge}</Text>}
          <Image source={product.logo} style={styles.logo} resizeMode="contain" />
          <Text style={[styles.headline, product.light && styles.headlineLight]}>
            {product.headline}
          </Text>
          <Text style={[styles.price, product.light && styles.headlineLight]}>
            {product.price}
          </Text>
          <View style={styles.ctaRow}>
            <BuyButton />
            <LearnMoreLink light={product.light} />
          </View>
          <Image source={product.hero} style={styles.heroImage} resizeMode="contain" />
        </View>
      ))}

      <View style={styles.guidedTour}>
        <Image
          source={require('../../assets/images/guided-tour-bg-17f807.png')}
          style={styles.guidedTourBg}
          resizeMode="cover"
        />
        <View style={styles.guidedTourContent}>
          <Text style={styles.guidedEyebrow}>A Guided Tour of</Text>
          <Text style={styles.guidedTitle}>iPhone 14 &{'\n'}iPhone 14 Pro</Text>
          <BuyButton label="Watch the film" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgPage,
  },
  promoBanner: {
    backgroundColor: colors.bgLight,
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  promoText: {
    fontSize: 12,
    textAlign: 'center',
    color: colors.textPrimary,
    lineHeight: 16,
  },
  hero: {
    paddingTop: 32,
    paddingHorizontal: 20,
    paddingBottom: 24,
    alignItems: 'center',
  },
  newBadge: {
    color: colors.new,
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 4,
  },
  logo: {
    height: 22,
    width: 140,
    marginBottom: 12,
  },
  headline: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.textPrimary,
    lineHeight: 38,
    marginBottom: 12,
  },
  headlineLight: {
    color: colors.bgLight,
  },
  price: {
    fontSize: 17,
    textAlign: 'center',
    color: colors.textPrimary,
    marginBottom: 16,
  },
  ctaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginBottom: 24,
  },
  heroImage: {
    width: '100%',
    height: 220,
  },
  guidedTour: {
    margin: 16,
    borderRadius: 24,
    overflow: 'hidden',
    minHeight: 360,
  },
  guidedTourBg: {
    ...StyleSheet.absoluteFill,
    width: '100%',
    height: '100%',
  },
  guidedTourContent: {
    padding: 32,
    paddingTop: 120,
  },
  guidedEyebrow: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  guidedTitle: {
    color: colors.white,
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 38,
    marginBottom: 20,
  },
});
