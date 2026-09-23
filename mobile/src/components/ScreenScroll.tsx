import { ScrollView, ScrollViewProps, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { layout } from '../theme/layout';

type Props = ScrollViewProps & {
  bottomInset?: boolean;
};

export function ScreenScroll({
  bottomInset = true,
  contentContainerStyle,
  style,
  ...rest
}: Props) {
  const insets = useSafeAreaInsets();
  const paddingBottom = bottomInset
    ? Math.max(insets.bottom, 12) + layout.tabBarClearance
    : undefined;

  return (
    <ScrollView
      {...rest}
      style={[styles.scroll, style]}
      contentContainerStyle={[
        styles.content,
        paddingBottom != null && { paddingBottom },
        contentContainerStyle,
      ]}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    />
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  content: {
    width: '100%',
    alignItems: 'stretch',
  },
});
