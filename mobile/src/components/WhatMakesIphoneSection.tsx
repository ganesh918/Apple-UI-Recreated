import { StyleSheet, Text, View } from 'react-native';
import { AspectImage } from './AspectImage';
import { LearnMoreLink } from './LearnMoreLink';
import { Reveal } from './Reveal';
import { SectionCard } from './SectionCard';
import { colors } from '../theme/colors';
import { layout, type } from '../theme/layout';

const ios16Card = require('../../assets/images/ios16-card-full-2x.png');
const switchingImage = require('../../assets/images/switching-iphone-56586a.png');

export function WhatMakesIphoneSection() {
  return (
    <View style={styles.section}>
      <Reveal variant="scale" delay={0}>
        <SectionCard style={styles.iosCard}>
          <AspectImage source={ios16Card} resizeMode="cover" />
          <View style={styles.iosCaption}>
            <Text style={styles.iosTitle}>iOS 16</Text>
            <Text style={styles.iosSubtitle}>Personal is powerful.</Text>
            <LearnMoreLink />
          </View>
        </SectionCard>
      </Reveal>

      <Reveal variant="up" delay={80}>
        <SectionCard>
          <View style={styles.switchCopy}>
            <Text style={styles.switchTitle}>
              Switching to iPhone{'\n'}is super simple.
            </Text>
            <LearnMoreLink />
          </View>
          <AspectImage source={switchingImage} containerStyle={styles.switchImage} resizeMode="contain" />
        </SectionCard>
      </Reveal>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 8,
    gap: layout.sectionGap,
  },
  iosCard: {
    backgroundColor: colors.black,
  },
  iosCaption: {
    paddingHorizontal: 24,
    paddingVertical: 28,
    alignItems: 'center',
    backgroundColor: colors.black,
  },
  iosTitle: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '700',
    color: colors.white,
    marginBottom: 6,
  },
  iosSubtitle: {
    ...type.body,
    color: colors.bgLight,
    marginBottom: 12,
    textAlign: 'center',
  },
  switchCopy: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 12,
    alignItems: 'center',
  },
  switchTitle: {
    fontSize: 26,
    lineHeight: 32,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.textPrimary,
    marginBottom: 12,
  },
  switchImage: {
    backgroundColor: colors.white,
  },
});
