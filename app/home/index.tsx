import HomeScreen from '@/features/home/screen/HomeScreen';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

export default function HomeIndexScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <HomeScreen />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 20, gap: 16 },
});
