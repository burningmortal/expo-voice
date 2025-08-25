import { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const data = ['Expo', 'React Native', 'TypeScript', 'Voice Recorder', 'Routing', 'Tabs', 'Notifications', 'Messages'].filter(item =>
    item.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          value={query}
          onChangeText={setQuery}
          placeholder='Search...'
          returnKeyType='search'
          clearButtonMode='while-editing'
        />
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No results</Text>}
      />
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
