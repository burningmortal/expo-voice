import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function PostScreen() {
  const [text, setText] = useState('');
  const disabled = text.trim().length === 0;

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} multiline placeholder="What's happening?" value={text} onChangeText={setText} maxLength={280} />
      <View style={styles.footer}>
        <Text style={styles.count}>{text.length}/280</Text>
        <Pressable style={[styles.button, { backgroundColor: disabled ? '#bcdbe4' : '#0a7ea4' }]} disabled={disabled} onPress={() => {}}>
          <Text style={styles.buttonText}>Post</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 18,
    padding: 12,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#eee',
    paddingTop: 12,
  },
  count: { color: '#666' },
  button: { paddingHorizontal: 18, paddingVertical: 10, borderRadius: 999 },
  buttonText: { color: '#fff', fontWeight: '700' },
});
