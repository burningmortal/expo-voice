import { Ionicons } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

export default function HomeTabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: true }}>
      <Tabs.Screen
        name='index'
        options={{
          title: 'ホーム',
          headerRight: ({ tintColor }) => (
            <Link href='/post' asChild>
              <Pressable accessibilityRole='button' accessibilityLabel='Create new post' hitSlop={8}>
                <Ionicons name='add-circle-outline' size={24} color={tintColor ?? '#000'} />
              </Pressable>
            </Link>
          ),
          tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          title: '検索',
          tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? 'search' : 'search-outline'} color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name='notification'
        options={{
          title: '通知',
          tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? 'notifications' : 'notifications-outline'} color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name='message'
        options={{
          title: 'メッセージ',
          tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? 'mail' : 'mail-outline'} color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
