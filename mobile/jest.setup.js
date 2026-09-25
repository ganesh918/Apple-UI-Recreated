/* eslint-disable @typescript-eslint/no-require-imports */

jest.mock('expo-linear-gradient', () => {
  const { View } = require('react-native');
  return { LinearGradient: View };
});

jest.mock('react-native-reanimated', () => {
  const { View, ScrollView } = require('react-native');

  const chain = () => ({
    duration: () => chain(),
    delay: () => chain(),
    easing: () => chain(),
    springify: () => chain(),
    damping: () => chain(),
  });

  return {
    __esModule: true,
    default: {
      View,
      ScrollView,
      createAnimatedComponent: (Component) => Component,
    },
    useSharedValue: (init) => ({ value: init }),
    useAnimatedStyle: (fn) => fn(),
    withSpring: (v) => v,
    Easing: { bezier: () => (t) => t },
    FadeIn: chain(),
    FadeInUp: chain(),
    FadeInDown: chain(),
    FadeInRight: chain(),
    ZoomIn: chain(),
  };
});
