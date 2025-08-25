import { Redirect } from 'expo-router';

export default function Index() {
  // Redirect root to the home tabs
  return <Redirect href='/home' />;
}
