import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { LearnMoreLink } from './LearnMoreLink';
import { colors } from '../theme/colors';
import { layout, type } from '../theme/layout';

export function AppleMusicCard() {
  return (
    <View style={styles.card}>
      <View style={styles.copy}>
        <Text style={styles.brand}>Apple Music</Text>
        <Text style={styles.body}>
          Over 100 million songs.{'\n'}Start listening for free today.
        </Text>
        <View style={styles.links}>
          <LearnMoreLink label="Try it free" />
          <LearnMoreLink label="Learn more" />
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.albums}
        nestedScrollEnabled
      >
        <Image
          source={require('../../assets/images/music-album-left-56586a.png')}
          style={styles.album}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/images/music-album-middle-56586a.png')}
          style={[styles.album, styles.albumMiddle]}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/images/music-album-right-56586a.png')}
          style={styles.album}
          resizeMode="contain"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    alignSelf: 'stretch',
    backgroundColor: colors.bgLighter,
    borderRadius: layout.cardRadius,
    marginBottom: layout.sectionGap,
    overflow: 'hidden',
    paddingBottom: 20,
  },
  copy: {
    paddingHorizontal: 22,
    paddingTop: 28,
    alignItems: 'center',
  },
  brand: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 12,
  },
  body: {
    ...type.body,
    textAlign: 'center',
    marginBottom: 12,
  },
  links: {
    alignItems: 'center',
    gap: 10,
    marginBottom: 16,
  },
  albums: {
    paddingHorizontal: 16,
    gap: 12,
    alignItems: 'flex-end',
  },
  album: {
    width: 140,
    height: 140,
  },
  albumMiddle: {
    width: 158,
    height: 158,
    marginBottom: 8,
  },
});
