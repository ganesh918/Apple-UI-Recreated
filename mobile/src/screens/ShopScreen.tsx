import { Image, StyleSheet, Text, View } from 'react-native';
import { AppleMusicCard } from '../components/AppleMusicCard';
import { AppleOneCard } from '../components/AppleOneCard';
import { AppleTvCard } from '../components/AppleTvCard';
import { AspectImage } from '../components/AspectImage';
import { PromoStackCard } from '../components/PromoStackCard';
import { CarrierDealsCard } from '../components/CarrierDealsCard';
import { CopyImageCard } from '../components/CopyImageCard';
import { LearnMoreLink } from '../components/LearnMoreLink';
import { ScreenScroll } from '../components/ScreenScroll';
import { SectionCard } from '../components/SectionCard';
import { SectionTitle } from '../components/SectionTitle';
import { StaggerReveal } from '../components/StaggerReveal';
import { colors } from '../theme/colors';
import { layout, type } from '../theme/layout';

const tradeInImage = require('../../assets/images/trade-in-phones-56586a.png');

const carriers = [
  {
    image: require('../../assets/images/carrier-att-56586a.png'),
    credit: 'Get up to $800\ncredit after trade-in',
  },
  {
    image: require('../../assets/images/carrier-tmobile-56586a.png'),
    credit: 'Get up to $400\ncredit after trade-in',
  },
  {
    image: require('../../assets/images/carrier-verizon-56586a.png'),
    credit: 'Get up to $800\ncredit after trade-in',
  },
];

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
    <ScreenScroll style={styles.container} contentContainerStyle={styles.content}>
      <SectionTitle>Ways to save on iPhone</SectionTitle>

      <StaggerReveal index={0}>
        <SectionCard>
          <AspectImage source={tradeInImage} containerStyle={styles.tradeInWrap} resizeMode="contain" />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Trade in for credit toward a new iPhone.</Text>
            <Text style={styles.cardSubtitle}>
              Get $200–$600 in credit when you trade in iPhone 11 or higher.
            </Text>
            <LearnMoreLink />
          </View>
        </SectionCard>
      </StaggerReveal>

      <StaggerReveal index={1}>
        <CarrierDealsCard carriers={carriers} />
      </StaggerReveal>

      <StaggerReveal index={2}>
        <CopyImageCard
          title={'Get 3% Daily Cash back with Apple Card.'}
          body="And pay for your new iPhone over 24 months, interest‑free when you choose to check out with Apple Card Monthly Installments.**"
          image={require('../../assets/images/apple-card-56586a.png')}
        />
      </StaggerReveal>

      <StaggerReveal index={3}>
        <PromoStackCard
          title="Why Apple is the best place to buy iPhone."
          body="You can choose a payment option that works for you, pay less with a trade‑in, connect your new iPhone to your carrier, and get set up quickly. You can also chat with a Specialist anytime."
          media={require('../../assets/images/why-apple-bg-56586a.png')}
          links={[{ label: 'Learn more' }]}
        />
      </StaggerReveal>

      <SectionTitle spaced>Get more out of your iPhone.</SectionTitle>

      <StaggerReveal index={4}>
        <AppleOneCard />
      </StaggerReveal>
      <StaggerReveal index={5}>
        <AppleTvCard />
      </StaggerReveal>
      <StaggerReveal index={6}>
        <AppleMusicCard />
      </StaggerReveal>

      <StaggerReveal index={7}>
        <PromoStackCard
          logo={require('../../assets/images/apple-news-logo-56586a.png')}
          logoWidth={184}
          logoHeight={39}
          body={'Get 3 months of Apple News+ free when you buy an iPhone.'}
          media={require('../../assets/images/apple-news-bg-38c9b7.png')}
          links={[{ label: 'Learn more' }]}
        />
      </StaggerReveal>

      <StaggerReveal index={8}>
        <PromoStackCard
          logo={require('../../assets/images/apple-arcade-logo-56586a.png')}
          logoWidth={180}
          logoHeight={39}
          body="Get 3 months of Apple Arcade free when you buy an iPhone."
          media={require('../../assets/images/apple-arcade-card-bg-2x.png')}
          links={[{ label: 'Try it free' }, { label: 'Learn more' }]}
        />
      </StaggerReveal>

      <StaggerReveal index={9}>
        <CopyImageCard
          title="Apple Fitness+"
          body={'Fitness for everyone.\nNow all you need is iPhone.'}
          image={require('../../assets/images/fitness-hero-56586a.png')}
          links={[{ label: 'Learn more' }, { label: 'Try it free' }]}
        />
      </StaggerReveal>

      <StaggerReveal index={10}>
        <CopyImageCard
          title="Apple Gift Card"
          body="For everything and everyone."
          image={require('../../assets/images/gift-card-56586a.png')}
          links={[{ label: 'Learn more' }, { label: 'Buy' }]}
        />
      </StaggerReveal>

      <StaggerReveal index={11}>
        <CopyImageCard
          title={'Introducing\nthe Apple\nResearch app.'}
          body="The future of health research is you."
          image={require('../../assets/images/research-app-56586a.png')}
        />
      </StaggerReveal>

      <SectionTitle spaced>Shopping made simple</SectionTitle>
      <StaggerReveal index={12}>
        <SectionCard style={styles.servicesCard}>
          {services.map((service, index) => (
            <View
              key={service.title}
              style={[styles.serviceRow, index < services.length - 1 && styles.serviceRowBorder]}
            >
              <Image source={service.icon} style={styles.serviceIcon} resizeMode="contain" />
              <Text style={styles.serviceTitle}>{service.title}</Text>
              <Text style={styles.serviceBody}>{service.body}</Text>
              <LearnMoreLink />
            </View>
          ))}
        </SectionCard>
      </StaggerReveal>

      <SectionTitle spaced>Featured accessories</SectionTitle>
      {accessories.map((item, index) => (
        <StaggerReveal key={item.title} index={13 + index}>
          <SectionCard muted>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardSubtitle}>{item.body}</Text>
            </View>
            <AspectImage source={item.image} containerStyle={styles.accessoryWrap} resizeMode="contain" />
            <View style={[styles.cardBody, styles.accessoryFooter]}>
              <LearnMoreLink label={`Shop ${item.title}`} />
            </View>
          </SectionCard>
        </StaggerReveal>
      ))}
    </ScreenScroll>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgPage,
  },
  content: {
    paddingTop: 24,
    paddingHorizontal: layout.screenPaddingX - 4,
    maxWidth: layout.maxContentWidth + 40,
    width: '100%',
    alignSelf: 'center',
  },
  tradeInWrap: {
    backgroundColor: colors.white,
  },
  cardBody: {
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
    color: colors.textPrimary,
  },
  cardSubtitle: {
    ...type.body,
    textAlign: 'center',
    color: colors.textSecondary,
    marginBottom: 12,
  },
  servicesCard: {
    paddingVertical: 8,
  },
  serviceRow: {
    alignItems: 'center',
    paddingVertical: 28,
    paddingHorizontal: 20,
  },
  serviceRowBorder: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  serviceIcon: {
    width: 51,
    height: 75,
    marginBottom: 14,
  },
  serviceTitle: {
    fontSize: 19,
    lineHeight: 25,
    fontWeight: '700',
    marginBottom: 8,
    color: colors.textPrimary,
    textAlign: 'center',
  },
  serviceBody: {
    ...type.body,
    textAlign: 'center',
    color: colors.textPrimary,
    marginBottom: 10,
  },
  accessoryWrap: {
    marginVertical: 4,
    paddingHorizontal: 12,
  },
  accessoryFooter: {
    paddingTop: 0,
    paddingBottom: 24,
  },
});
