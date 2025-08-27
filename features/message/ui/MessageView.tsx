import { FlatList, StyleSheet, Text, View } from 'react-native';

type Conversation = { id: string; user: string; lastMessage: string; time: string };

const conversations: Conversation[] = [
  { id: '1', user: 'ありな', lastMessage: 'ばいばい！', time: '09:30' },
  { id: '2', user: 'みな', lastMessage: 'ちょっと見にきて', time: 'Yesterday' },
  { id: '3', user: 'すず', lastMessage: 'ありがと☺️', time: 'Mon' },
  { id: '4', user: 'ゆい', lastMessage: 'すぐ確認して', time: 'Sun' },
];

export function MessageView() {
  return (
    <FlatList
      data={conversations}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <View style={styles.itemRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{item.user[0]}</Text>
          </View>
          <View style={styles.itemContent}>
            <View style={styles.itemHeader}>
              <Text style={styles.user}>{item.user}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
            <Text style={styles.last}>{item.lastMessage}</Text>
          </View>
        </View>
      )}
      ItemSeparatorComponent={() => <View style={styles.sep} />}
    />
  );
}

const styles = StyleSheet.create({
  list: { padding: 16 },
  itemRow: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#e5e5e5', alignItems: 'center', justifyContent: 'center' },
  avatarText: { fontWeight: '700', color: '#555' },
  itemContent: { flex: 1, marginLeft: 12 },
  itemHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  user: { fontWeight: '700' },
  time: { color: '#999' },
  last: { color: '#555', marginTop: 2 },
  sep: { height: 14 },
});
