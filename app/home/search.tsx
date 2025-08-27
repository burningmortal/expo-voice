import SearchScreen from '@/features/search/screen/SearchScreen';
import { SafeAreaView, StyleSheet } from 'react-native';

export default function SearchIndex() {
  return (
    <SafeAreaView style={styles.container}>
      <SearchScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  searchBar: { padding: 16, borderBottomWidth: StyleSheet.hairlineWidth, borderColor: '#ddd' },
  input: { height: 40, paddingHorizontal: 12, backgroundColor: '#f1f1f1', borderRadius: 8 },
  list: { padding: 16, gap: 8 },
  item: { padding: 14, backgroundColor: '#fafafa', borderRadius: 10, borderWidth: StyleSheet.hairlineWidth, borderColor: '#eee' },
  itemText: { color: '#333' },
  empty: { textAlign: 'center', color: '#888', marginTop: 24 },
});
