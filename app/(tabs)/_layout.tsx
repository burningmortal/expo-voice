import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name='index' options={{ title: 'ホーム', tabBarIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} /> }} />
      <Tabs.Screen name='search' options={{ title: '検索', tabBarIcon: ({ color, size }) => <Ionicons name='search' color={color} size={size} /> }} />
      <Tabs.Screen
        name='notifications'
        options={{ title: '通知', tabBarIcon: ({ color, size }) => <Ionicons name='notifications' color={color} size={size} /> }}
      />
      <Tabs.Screen
        name='messages'
        options={{ title: 'メッセージ', tabBarIcon: ({ color, size }) => <Ionicons name='mail' color={color} size={size} /> }}
      />
    </Tabs>
  );
}
