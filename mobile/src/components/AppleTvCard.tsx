import { Image, StyleSheet, Text, View } from 'react-native';
import { LearnMoreLink } from './LearnMoreLink';
import { colors } from '../theme/colors';
import { layout, type } from '../theme/layout';

export function AppleTvCard() {
  return (
    <View style={styles.card}>
      <View style={styles.copy}>
        <Image
          source={require('../../assets/images/apple-tv-logo-56586a.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.body}>
          Get 3 months of Apple TV+ free{'\n'}when you buy an iPhone.
          <Text style={styles.sup}>10</Text>
        </Text>
        <View style={styles.links}>
          <LearnMoreLink label="Try it free" light />
          <LearnMoreLink label="Learn more" light />
        </View>
      </View>
      <Image
        source={require('../../assets/images/apple-tv-showcase-2x.png')}
        style={styles.showcase}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    alignSelf: 'stretch',
    backgroundColor: colors.black,
    borderRadius: layout.cardRadius,
    marginBottom: layout.sectionGap,
    overflow: 'hidden',
  },
  copy: {
    paddingHorizontal: 22,
    paddingTop: 32,
    paddingBottom: 20,
    alignItems: 'center',
  },
  logo: {
    width: 98,
    height: 39,
    marginBottom: 14,
  },
  body: {
    ...type.body,
    textAlign: 'center',
    color: colors.bgLight,
    marginBottom: 12,
  },
  sup: {
    fontSize: 12,
    lineHeight: 12,
  },
  links: {
    alignItems: 'center',
    gap: 10,
  },
  showcase: {
    width: '100%',
    aspectRatio: 675 / 344,
  },
});
