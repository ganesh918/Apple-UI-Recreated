import { Platform, StyleSheet, View, ViewProps } from 'react-native';
import { colors } from '../theme/colors';
import { layout } from '../theme/layout';

type Props = ViewProps & {
  muted?: boolean;
  elevated?: boolean;
};

export function SectionCard({ style, muted, elevated = true, children, ...rest }: Props) {
  return (
    <View
      {...rest}
      style={[
        styles.card,
        muted && styles.cardMuted,
        elevated && styles.elevated,
        style,
      ]}
    >
      {children}
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
  cardMuted: {
    backgroundColor: colors.bgLighter,
  },
  elevated: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.07,
        shadowRadius: 28,
      },
      android: { elevation: 6 },
      default: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.06,
        shadowRadius: 24,
      },
    }),
  },
});
