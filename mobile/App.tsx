import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeScreen } from './src/screens/HomeScreen';
import { CompareScreen } from './src/screens/CompareScreen';
import { ShopScreen } from './src/screens/ShopScreen';
import { colors } from './src/theme/colors';
import { fontFamily } from './src/theme/fonts';

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
    <View style={[styles.iconWrap, focused && styles.iconWrapActive]}>
      <Ionicons
        name={name}
        size={23}
        color={focused ? colors.link : colors.textSecondary}
      />
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
            headerStyle: styles.header,
            headerShadowVisible: false,
            headerTitleStyle: styles.headerTitle,
            headerTitleAlign: 'center',
            tabBarStyle: styles.tabBar,
            tabBarActiveTintColor: colors.link,
            tabBarInactiveTintColor: colors.textSecondary,
            tabBarLabelStyle: styles.tabLabel,
            tabBarHideOnKeyboard: true,
            animation: 'shift',
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
  header: {
    backgroundColor: 'rgba(251, 251, 253, 0.92)',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  headerTitle: {
    fontFamily,
    fontWeight: '600',
    fontSize: 17,
    letterSpacing: -0.02 * 17,
    color: colors.textPrimary,
  },
  tabBar: {
    backgroundColor: 'rgba(251, 251, 253, 0.96)',
    borderTopColor: colors.border,
    borderTopWidth: StyleSheet.hairlineWidth,
    height: Platform.OS === 'ios' ? 88 : 68,
    paddingBottom: Platform.OS === 'ios' ? 28 : 12,
    paddingTop: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.06,
        shadowRadius: 12,
      },
      android: { elevation: 12 },
      default: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -6 },
        shadowOpacity: 0.05,
        shadowRadius: 16,
      },
    }),
  },
  tabLabel: {
    fontFamily,
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: -0.01 * 10,
    marginTop: 2,
  },
  iconWrap: {
    padding: 4,
    borderRadius: 12,
  },
  iconWrapActive: {
    backgroundColor: 'rgba(0, 102, 204, 0.08)',
  },
});
