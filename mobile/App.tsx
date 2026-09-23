import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
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
    background: colors.bgPage,
    primary: colors.link,
    text: colors.textPrimary,
    border: colors.border,
    card: colors.bgLighter,
  },
};

function tabIcon(name: keyof typeof Ionicons.glyphMap, focused: boolean) {
  return (
    <Ionicons
      name={name}
      size={22}
      color={focused ? colors.link : colors.textSecondary}
    />
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navTheme}>
        <StatusBar style="dark" />
        <Tab.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: colors.bgLighter,
            },
            headerShadowVisible: false,
            headerTitleStyle: styles.headerTitle,
            headerTitleAlign: 'center',
            tabBarStyle: styles.tabBar,
            tabBarActiveTintColor: colors.link,
            tabBarInactiveTintColor: colors.textSecondary,
            tabBarLabelStyle: styles.tabLabel,
          }}
        >
          <Tab.Screen
            name="iPhone"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ focused }) =>
                tabIcon(focused ? 'phone-portrait' : 'phone-portrait-outline', focused),
            }}
          />
          <Tab.Screen
            name="Compare"
            component={CompareScreen}
            options={{
              tabBarIcon: ({ focused }) =>
                tabIcon(focused ? 'git-compare' : 'git-compare-outline', focused),
            }}
          />
          <Tab.Screen
            name="Shop"
            component={ShopScreen}
            options={{
              tabBarIcon: ({ focused }) =>
                tabIcon(focused ? 'bag' : 'bag-outline', focused),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontWeight: '600',
    fontSize: 17,
    letterSpacing: -0.02 * 17,
    color: colors.textPrimary,
  },
  tabBar: {
    backgroundColor: 'rgba(251, 251, 253, 0.98)',
    borderTopColor: colors.border,
    borderTopWidth: StyleSheet.hairlineWidth,
    height: Platform.OS === 'ios' ? 88 : 64,
    paddingBottom: Platform.OS === 'ios' ? 28 : 10,
    paddingTop: 8,
  },
  tabLabel: {
    fontSize: 10,
    fontWeight: '500',
    letterSpacing: -0.01 * 10,
  },
});
