import { StyleSheet, Text, View } from 'react-native';

export function HomeView() {
  return (
    <>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.subtitle}>Welcome back 👋</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Getting Started</Text>
        <Text style={styles.cardText}>Use the tabs below to explore Search, Notifications, and Messages.</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.pill}>
          <Text style={styles.pillText}>News</Text>
        </View>
        <View style={styles.pill}>
          <Text style={styles.pillText}>Trends</Text>
        </View>
        <View style={styles.pill}>
          <Text style={styles.pillText}>For you</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 28, fontWeight: '700' },
  subtitle: { fontSize: 16, color: '#666' },
  row: { flexDirection: 'row', gap: 8 },
  pill: { paddingHorizontal: 12, paddingVertical: 6, backgroundColor: '#eee', borderRadius: 999 },
  pillText: { color: '#333' },
  card: { padding: 16, borderRadius: 12, backgroundColor: '#f7f7f7' },
  cardTitle: { fontWeight: '700', marginBottom: 6 },
  cardText: { color: '#444' },
});
