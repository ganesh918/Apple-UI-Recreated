import { Easing, FadeIn, FadeInDown, FadeInUp, ZoomIn } from 'react-native-reanimated';

/** Apple-style ease-out, aligned with web `easeAppleOut`. */
export const easeOut = Easing.bezier(0.16, 1, 0.3, 1);

export function revealUp(delay = 0) {
  return FadeInUp.duration(720)
    .delay(delay)
    .easing(easeOut);
}

export function revealDown(delay = 0) {
  return FadeInDown.duration(720)
    .delay(delay)
    .easing(easeOut);
}

export function revealScale(delay = 0) {
  return ZoomIn.duration(680)
    .delay(delay)
    .easing(easeOut);
}

export function revealFade(delay = 0) {
  return FadeIn.duration(500)
    .delay(delay)
    .easing(easeOut);
}

export function heroEntrance(delay = 0) {
  return FadeInDown.duration(950)
    .delay(delay)
    .easing(easeOut);
}

export function staggerDelay(index: number, stepMs = 90) {
  return index * stepMs;
}
