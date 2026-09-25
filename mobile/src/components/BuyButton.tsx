import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { colors } from '../theme/colors';
import { fontFamily } from '../theme/fonts';

interface BuyButtonProps {
  label?: string;
  small?: boolean;
  centered?: boolean;
  animated?: boolean;
  onPress?: () => void;
}

export function BuyButton({
  label = 'Buy',
  small,
  centered,
  animated,
  onPress,
}: BuyButtonProps) {
  const scale = useSharedValue(1);
  const animStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const pressIn = () => {
    scale.value = withSpring(0.96, { damping: 18, stiffness: 420 });
  };
  const pressOut = () => {
    scale.value = withSpring(1, { damping: 18, stiffness: 420 });
  };

  const button = (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        small && styles.buttonSmall,
        !animated && pressed && styles.pressed,
      ]}
      onPress={onPress}
      onPressIn={animated ? pressIn : undefined}
      onPressOut={animated ? pressOut : undefined}
    >
      <Text style={[styles.label, small && styles.labelSmall]}>{label}</Text>
    </Pressable>
  );

  if (!animated) {
    return <View style={centered ? styles.centeredWrap : undefined}>{button}</View>;
  }

  return (
    <Animated.View style={[animStyle, centered && styles.centeredWrap]}>{button}</Animated.View>
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
  centeredWrap: {
    alignSelf: 'center',
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  label: {
    fontFamily,
    color: colors.white,
    fontSize: 17,
    fontWeight: '400',
    letterSpacing: -0.022 * 17,
  },
  labelSmall: {
    fontSize: 12,
  },
});
