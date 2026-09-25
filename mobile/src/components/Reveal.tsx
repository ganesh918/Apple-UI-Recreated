import { useEffect, useState, type ReactNode } from 'react';
import { AccessibilityInfo, View, ViewStyle } from 'react-native';
import Animated, { type AnimatedProps } from 'react-native-reanimated';
import { revealDown, revealFade, revealScale, revealUp } from '../motion/presets';

type Variant = 'up' | 'down' | 'scale' | 'fade';

type Props = {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  style?: ViewStyle;
};

function enteringFor(variant: Variant, delay: number) {
  switch (variant) {
    case 'down':
      return revealDown(delay);
    case 'scale':
      return revealScale(delay);
    case 'fade':
      return revealFade(delay);
    case 'up':
    default:
      return revealUp(delay);
  }
}

export function Reveal({ children, variant = 'up', delay = 0, style }: Props) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    AccessibilityInfo.isReduceMotionEnabled().then(setReduceMotion);
    const sub = AccessibilityInfo.addEventListener('reduceMotionChanged', setReduceMotion);
    return () => sub.remove();
  }, []);

  if (reduceMotion) {
    return <View style={style}>{children}</View>;
  }

  const entering = enteringFor(variant, delay) as AnimatedProps<View>['entering'];

  return (
    <Animated.View entering={entering} style={style}>
      {children}
    </Animated.View>
  );
}
