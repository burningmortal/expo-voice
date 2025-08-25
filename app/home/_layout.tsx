import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function HomeTabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          title: 'Search',
          tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? 'search' : 'search-outline'} color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name='notification'
        options={{
          title: 'Notifications',
          tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? 'notifications' : 'notifications-outline'} color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name='message'
        options={{
          title: 'Messages',
          tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? 'mail' : 'mail-outline'} color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
