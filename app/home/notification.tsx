import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const notifications = [
  { id: '1', title: 'New follower', body: 'Alex started following you.' },
  { id: '2', title: 'Mention', body: 'You were mentioned in a comment.' },
  { id: '3', title: 'Update', body: 'Your post was approved.' },
  { id: '4', title: 'Reminder', body: 'Don’t forget to check your messages.' },
];

export default function NotificationScreen() {
  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  list: { padding: 16 },
  item: { padding: 16, backgroundColor: '#fff', borderRadius: 12, borderWidth: StyleSheet.hairlineWidth, borderColor: '#eaeaea' },
  itemTitle: { fontWeight: '700', marginBottom: 4 },
  itemBody: { color: '#555' },
  sep: { height: 12 },
});
