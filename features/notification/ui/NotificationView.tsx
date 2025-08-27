import * as Haptics from 'expo-haptics';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function NotificationView() {
  const [hapticState, setHapticState] = useState<'selection' | 'notification' | 'impact'>('selection');

  const notifications = [
    { id: '1', title: '新しいフォロワー', body: 'ありなさんにフォローされました' },
    { id: '2', title: 'メンション', body: 'メンションされました' },
    { id: '3', title: '更新', body: 'ポストが承認されました' },
    { id: '4', title: 'リマインダー', body: '新しいメッセージを見逃さないようにしてください' },
  ];

  const onPress = () => {
    console.log(12, 'pressed');
    switch (hapticState) {
      case 'selection':
        Haptics.selectionAsync();
        break;
      case 'notification':
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        break;
      case 'impact':
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);

        break;
      default:
        break;
    }
    Haptics.selectionAsync();
    console.log(13, 'done');
  };

  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold', padding: 24 }}>触覚フィードバック</Text>

      <View>
        <Text style={{ textAlign: 'center', padding: 24, fontSize: 18 }}>{hapticState}</Text>
        <Button title='select' onPress={() => setHapticState('selection')}>
          selection
        </Button>
        <Button title='notification' onPress={() => setHapticState('notification')}>
          notification
        </Button>
        <Button title='impact' onPress={() => setHapticState('impact')}>
          impact
        </Button>
      </View>
      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={onPress}>
            <View style={styles.item}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemBody}>{item.body}</Text>
            </View>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.sep} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: { padding: 16 },
  item: { padding: 16, backgroundColor: '#fff', borderRadius: 12, borderWidth: StyleSheet.hairlineWidth, borderColor: '#eaeaea' },
  itemTitle: { fontWeight: '700', marginBottom: 4 },
  itemBody: { color: '#555' },
  sep: { height: 12 },
});
