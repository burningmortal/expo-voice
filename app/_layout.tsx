import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* Hide parent header for the /home segment to avoid double headers */}
      <Stack.Screen name="home" options={{ headerShown: false }} />
    </Stack>
  );
}
