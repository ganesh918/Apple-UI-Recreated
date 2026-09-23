import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { BuyButton } from '../components/BuyButton';
import { LearnMoreLink } from '../components/LearnMoreLink';
import { colors } from '../theme/colors';

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
    <ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.inner}>
        <Text style={styles.title}>Which iPhone is right for you?</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.row}>
          {models.map((model) => (
            <View key={model.name} style={styles.card}>
              <Image source={model.phone} style={styles.phone} resizeMode="contain" />
              <Image source={model.logo} style={styles.logo} resizeMode="contain" />
              <Text style={styles.tagline}>{model.tagline}</Text>
              <Text style={styles.price}>{model.price}</Text>
              {model.isNew && <Text style={styles.new}>New</Text>}
              <BuyButton small />
              <LearnMoreLink />
            </View>
          ))}
        </ScrollView>
        <View style={styles.footerLinks}>
          <LearnMoreLink label="Compare all iPhone models" />
          <LearnMoreLink label="Shop iPhone" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  inner: {
    paddingVertical: 32,
    minWidth: '100%',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.textPrimary,
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  row: {
    paddingHorizontal: 16,
    gap: 16,
  },
  card: {
    width: 240,
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  phone: {
    width: 140,
    height: 180,
    marginBottom: 12,
  },
  logo: {
    height: 20,
    width: 120,
    marginBottom: 8,
  },
  tagline: {
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },
  price: {
    fontSize: 14,
    color: colors.textPrimary,
    marginBottom: 12,
  },
  new: {
    color: colors.new,
    fontSize: 12,
    marginBottom: 8,
  },
  footerLinks: {
    marginTop: 24,
    paddingHorizontal: 20,
    gap: 12,
    alignItems: 'center',
  },
});
