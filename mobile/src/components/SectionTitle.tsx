import { StyleSheet, Text, View } from 'react-native';
import { Reveal } from './Reveal';
import { colors } from '../theme/colors';
import { layout, type } from '../theme/layout';

type Props = {
  children: string;
  spaced?: boolean;
};

export function SectionTitle({ children, spaced }: Props) {
  return (
    <Reveal variant="down" delay={0}>
      <View style={[styles.wrap, spaced && styles.spaced]}>
        <Text style={styles.title}>{children}</Text>
      </View>
    </Reveal>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: layout.screenPaddingX,
    marginBottom: 16,
  },
  spaced: {
    marginTop: 28,
  },
  title: {
    ...type.sectionTitle,
    color: colors.textPrimary,
    textAlign: 'center',
  },
});
