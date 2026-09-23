import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeScreen } from './src/screens/HomeScreen';
import { CompareScreen } from './src/screens/CompareScreen';
import { ShopScreen } from './src/screens/ShopScreen';
import { colors } from './src/theme/colors';

const Tab = createBottomTabNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.bgLighter,
    primary: colors.link,
    text: colors.textPrimary,
    border: colors.border,
  },
};

function TabIcon({ label, focused }: { label: string; focused: boolean }) {
  return (
    <View style={styles.tabIcon}>
      <Text style={[styles.tabEmoji]}>{label}</Text>
      <View style={[styles.tabDot, focused && styles.tabDotActive]} />
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navTheme}>
        <StatusBar style="dark" />
        <Tab.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: colors.bgLighter },
            headerTitleStyle: { fontWeight: '600', fontSize: 17 },
            tabBarStyle: {
              backgroundColor: 'rgba(251, 251, 253, 0.95)',
              borderTopColor: colors.border,
              height: 84,
              paddingBottom: 24,
              paddingTop: 8,
            },
            tabBarActiveTintColor: colors.link,
            tabBarInactiveTintColor: colors.textSecondary,
            tabBarLabelStyle: { fontSize: 10, fontWeight: '500' },
          }}
        >
          <Tab.Screen
            name="iPhone"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ focused }) => <TabIcon label="📱" focused={focused} />,
            }}
          />
          <Tab.Screen
            name="Compare"
            component={CompareScreen}
            options={{
              tabBarIcon: ({ focused }) => <TabIcon label="⚖️" focused={focused} />,
            }}
          />
          <Tab.Screen
            name="Shop"
            component={ShopScreen}
            options={{
              tabBarIcon: ({ focused }) => <TabIcon label="🛍️" focused={focused} />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  tabIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabEmoji: {
    fontSize: 22,
  },
  tabDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    marginTop: 4,
    backgroundColor: 'transparent',
  },
  tabDotActive: {
    backgroundColor: colors.link,
  },
});
