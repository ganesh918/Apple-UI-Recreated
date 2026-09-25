import { Image, StyleSheet, Text, View } from 'react-native';
import { AspectImage } from './AspectImage';
import { LearnMoreLink } from './LearnMoreLink';
import { colors } from '../theme/colors';
import { layout, type } from '../theme/layout';

const heroImage = require('../../assets/images/apple-one-56586a.png');

export function AppleOneCard() {
  return (
    <View style={styles.card}>
      <AspectImage source={heroImage} containerStyle={styles.heroWrap} resizeMode="contain" />
      <View style={styles.copy}>
        <Image
          source={require('../../assets/images/apple-one-logo-56586a.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.subtitle}>
          Bundle up to six Apple services. And enjoy more for less.
        </Text>
        <View style={styles.links}>
          <LearnMoreLink label="Try it free" />
          <LearnMoreLink label="Learn more" />
        </View>
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
  heroWrap: {
    backgroundColor: colors.white,
  },
  copy: {
    paddingHorizontal: 22,
    paddingBottom: 28,
    alignItems: 'center',
  },
  logo: {
    width: 220,
    height: 70,
    marginBottom: 12,
  },
  subtitle: {
    ...type.body,
    textAlign: 'center',
    marginBottom: 12,
  },
  links: {
    alignItems: 'center',
    gap: 10,
  },
});
