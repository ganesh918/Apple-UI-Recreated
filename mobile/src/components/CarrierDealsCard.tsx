import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import { LearnMoreLink } from './LearnMoreLink';
import { colors } from '../theme/colors';
import { layout, type } from '../theme/layout';

type Carrier = {
  image: ImageSourcePropType;
  credit: string;
};

type Props = {
  carriers: Carrier[];
};

export function CarrierDealsCard({ carriers }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.head}>
        <Text style={styles.title}>
          Save up to $800 with select carrier deals at Apple.
          <Text style={styles.sup}>8</Text>
        </Text>
        <Text style={styles.body}>
          Get the carrier deals you love and save on a new iPhone when you trade in and purchase
          right here at Apple.
        </Text>
        <LearnMoreLink label="Find your deal" />
      </View>
      <View style={styles.list}>
        {carriers.map((carrier, index) => (
          <View
            key={String(carrier.image)}
            style={[styles.cell, index < carriers.length - 1 && styles.cellBorder]}
          >
            <Image source={carrier.image} style={styles.logo} resizeMode="contain" />
            <Text style={styles.credit}>{carrier.credit}</Text>
          </View>
        ))}
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
    paddingBottom: 8,
  },
  head: {
    paddingHorizontal: 22,
    paddingTop: 32,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    lineHeight: 32,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.textPrimary,
    marginBottom: 14,
  },
  sup: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '700',
  },
  body: {
    ...type.body,
    textAlign: 'center',
    marginBottom: 12,
  },
  list: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  cell: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 24,
  },
  cellBorder: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  logo: {
    width: '100%',
    maxWidth: 200,
    height: 72,
    marginBottom: 10,
  },
  credit: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    color: colors.textPrimary,
  },
});
