import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { LearnMoreLink } from '../components/LearnMoreLink';
import { colors } from '../theme/colors';

const services = [
  {
    icon: require('../../assets/images/icon-delivery-56586a.png'),
    title: 'Fast, free delivery',
    body: 'Or pick up available items at an Apple Store.',
  },
  {
    icon: require('../../assets/images/icon-financing-56586a.png'),
    title: 'Pay monthly at 0% APR',
    body: 'Pay over time with Apple Card Monthly Installments.',
  },
  {
    icon: require('../../assets/images/icon-support-56586a.png'),
    title: 'Get help buying',
    body: 'Call a Specialist or chat online. 1‑800‑MY‑APPLE.',
  },
];

const accessories = [
  {
    title: 'MagSafe',
    body: 'Snap on a magnetic case, wallet, or both.',
    image: require('../../assets/images/magsafe-56586a.png'),
  },
  {
    title: 'AirTag',
    body: 'Attach one to your keys. Use Find My when misplaced.',
    image: require('../../assets/images/airtag-56586a.png'),
  },
  {
    title: 'AirPods',
    body: 'Magic runs in the family.',
    image: require('../../assets/images/airpods-56586a.png'),
  },
];

export function ShopScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.sectionTitle}>Ways to save on iPhone</Text>
      <Image
        source={require('../../assets/images/trade-in-phones-56586a.png')}
        style={styles.tradeInImage}
        resizeMode="cover"
      />
      <Text style={styles.cardTitle}>Trade in for credit toward a new iPhone.</Text>
      <LearnMoreLink />

      <Text style={[styles.sectionTitle, styles.sectionSpaced]}>Shopping made simple</Text>
      {services.map((service) => (
        <View key={service.title} style={styles.serviceCard}>
          <Image source={service.icon} style={styles.serviceIcon} resizeMode="contain" />
          <Text style={styles.serviceTitle}>{service.title}</Text>
          <Text style={styles.serviceBody}>{service.body}</Text>
          <LearnMoreLink />
        </View>
      ))}

      <Text style={[styles.sectionTitle, styles.sectionSpaced]}>Featured accessories</Text>
      {accessories.map((item) => (
        <View key={item.title} style={styles.accessoryCard}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.serviceBody}>{item.body}</Text>
          <Image source={item.image} style={styles.accessoryImage} resizeMode="contain" />
          <LearnMoreLink label={`Shop ${item.title}`} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.textPrimary,
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionSpaced: {
    marginTop: 32,
  },
  tradeInImage: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 12,
    color: colors.textPrimary,
  },
  serviceCard: {
    alignItems: 'center',
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  serviceIcon: {
    width: 51,
    height: 75,
    marginBottom: 12,
  },
  serviceTitle: {
    fontSize: 19,
    fontWeight: '700',
    marginBottom: 8,
  },
  serviceBody: {
    fontSize: 17,
    textAlign: 'center',
    color: colors.textPrimary,
    marginBottom: 8,
    lineHeight: 25,
  },
  accessoryCard: {
    backgroundColor: colors.bgCard,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    alignItems: 'center',
  },
  accessoryImage: {
    width: '100%',
    height: 200,
    marginVertical: 16,
  },
});
