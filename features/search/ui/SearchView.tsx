import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export function SearchView() {
  const [query, setQuery] = useState('');
  const data = ['Expo', 'React Native', 'TypeScript', 'ボイスレコーダー', 'ルーティング', 'タブ', '通知', 'メッセージ'].filter(item =>
    item.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
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
        ListEmptyComponent={<Text style={styles.empty}>結果がありません</Text>}
      />
    </>
  );
}

const styles = StyleSheet.create({
  searchBar: { padding: 16, borderBottomWidth: StyleSheet.hairlineWidth, borderColor: '#ddd' },
  input: { height: 40, paddingHorizontal: 12, backgroundColor: '#f1f1f1', borderRadius: 8 },
  list: { padding: 16, gap: 8 },
  item: { padding: 14, backgroundColor: '#fafafa', borderRadius: 10, borderWidth: StyleSheet.hairlineWidth, borderColor: '#eee' },
  itemText: { color: '#333' },
  empty: { textAlign: 'center', color: '#888', marginTop: 24 },
});
