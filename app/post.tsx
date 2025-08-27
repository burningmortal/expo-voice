import { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function PostScreen() {
  const [text, setText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create Post</Text>
      <TextInput style={styles.input} placeholder="What's happening?" value={text} onChangeText={setText} multiline />
      <View style={styles.actions}>
        <Pressable style={[styles.button, text ? styles.buttonPrimary : styles.buttonDisabled]} disabled={!text}>
          <Text style={styles.buttonText}>Post</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 12 },
  title: { fontSize: 20, fontWeight: '700' },
  input: {
    minHeight: 120,
    padding: 12,
    borderRadius: 12,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    textAlignVertical: 'top',
  },
  actions: { alignItems: 'flex-end' },
  button: { paddingHorizontal: 16, paddingVertical: 10, borderRadius: 999 },
  buttonPrimary: { backgroundColor: '#0a7ea4' },
  buttonDisabled: { backgroundColor: '#bcdbe4' },
  buttonText: { color: '#fff', fontWeight: '700' },
});
