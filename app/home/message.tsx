import MessageScreen from '@/features/message/screen/MessageScreen';
import { SafeAreaView, StyleSheet } from 'react-native';

export default function MessageIndex() {
  return (
    <SafeAreaView style={styles.container}>
      <MessageScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
