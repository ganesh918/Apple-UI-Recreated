import { Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '../theme/colors';
import { fontFamily } from '../theme/fonts';

interface LearnMoreLinkProps {
  label?: string;
  light?: boolean;
  onPress?: () => void;
}

export function LearnMoreLink({ label = 'Learn more', light, onPress }: LearnMoreLinkProps) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
      <Text style={[styles.link, light && styles.linkLight]}>
        {label} ›
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  link: {
    fontFamily,
    color: colors.link,
    fontSize: 17,
    lineHeight: 25,
  },
  linkLight: {
    color: colors.linkLight,
  },
  pressed: {
    opacity: 0.7,
  },
});
