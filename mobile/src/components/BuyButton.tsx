import { Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '../theme/colors';

interface BuyButtonProps {
  label?: string;
  small?: boolean;
  onPress?: () => void;
}

export function BuyButton({ label = 'Buy', small, onPress }: BuyButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        small && styles.buttonSmall,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.label, small && styles.labelSmall]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.buy,
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 980,
    alignSelf: 'flex-start',
  },
  buttonSmall: {
    paddingVertical: 6,
    paddingHorizontal: 14,
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  label: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '400',
    letterSpacing: -0.022 * 17,
  },
  labelSmall: {
    fontSize: 12,
  },
});
