import { FlatList, StyleSheet, Text, View } from 'react-native';

export function NotificationView() {
  const notifications = [
    { id: '1', title: '新しいフォロワー', body: 'ありなさんにフォローされました' },
    { id: '2', title: 'メンション', body: 'メンションされました' },
    { id: '3', title: '更新', body: 'ポストが承認されました' },
    { id: '4', title: 'リマインダー', body: '新しいメッセージを見逃さないようにしてください' },
  ];

  return (
    <FlatList
      data={notifications}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemBody}>{item.body}</Text>
        </View>
      )}
      ItemSeparatorComponent={() => <View style={styles.sep} />}
    />
  );
}

const styles = StyleSheet.create({
  list: { padding: 16 },
  item: { padding: 16, backgroundColor: '#fff', borderRadius: 12, borderWidth: StyleSheet.hairlineWidth, borderColor: '#eaeaea' },
  itemTitle: { fontWeight: '700', marginBottom: 4 },
  itemBody: { color: '#555' },
  sep: { height: 12 },
});
