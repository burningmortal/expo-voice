import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function HomeLayout() {
  return (
    <Tabs>
      <Tabs.Screen name='index' options={{ title: 'ホーム', tabBarIcon: () => <Ionicons name='home' /> }} />
      <Tabs.Screen name='search/index' options={{ title: '検索', tabBarIcon: () => <Ionicons name='search' /> }} />
      <Tabs.Screen name='notification/index' options={{ title: '通知', tabBarIcon: () => <Ionicons name='notifications' /> }} />
      <Tabs.Screen name='message/index' options={{ title: 'メッセージ', tabBarIcon: () => <Ionicons name='mail-outline' /> }} />
    </Tabs>
  );
}
