import NotificationScreen from '@/features/notification/screen/NotificationScreen';
import { SafeAreaView, StyleSheet } from 'react-native';

export default function NotificationIndex() {
  return (
    <SafeAreaView style={styles.container}>
      <NotificationScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
