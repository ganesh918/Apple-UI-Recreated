import { StyleSheet, View, ViewProps } from 'react-native';
import { colors } from '../theme/colors';
import { layout } from '../theme/layout';

type Props = ViewProps & {
  muted?: boolean;
};

export function SectionCard({ style, muted, children, ...rest }: Props) {
  return (
    <View
      {...rest}
      style={[styles.card, muted && styles.cardMuted, style]}
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
});
