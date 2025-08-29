import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { HomeView } from '../ui/HomeView';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.content}>
        <HomeView />
      </View>
      <Pressable style={styles.fab} onPress={() => router.push('/post')}>
        <Text style={styles.fabText}>＋</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  content: { flex: 1 },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#0a7ea4',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  fabText: { color: '#fff', fontSize: 28, lineHeight: 28 },
});
