import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native';

export default function RootLayout() {
  return (
    <Stack>
      <SafeAreaView>
        <Stack.Screen name='(home)/index' options={{ headerShown: false, headerTitle: 'ASDF' }} />
      </SafeAreaView>
    </Stack>
  );
}
