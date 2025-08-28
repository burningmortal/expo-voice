import '@testing-library/jest-native/extend-expect';

// Minimal mocks for libraries used in Expo/React Native environment
jest.mock('expo-router', () => {
  const React = require('react');
  const { View, Text } = require('react-native');
  const Stack = ({ children }: any) => React.createElement(View, { testID: 'stack' }, children);
  // Provide a dummy Screen component to satisfy <Stack.Screen /> usage

  (Stack as any).Screen = (_props: any) => React.createElement(View, { testID: 'stack-screen' });

  const Tabs = ({ children }: any) => React.createElement(View, { testID: 'tabs' }, children);

  (Tabs as any).Screen = (_props: any) => React.createElement(View, { testID: 'tabs-screen' });

  return {
    Redirect: ({ href }: { href: string }) => React.createElement(Text, { testID: 'redirect' }, `Redirect:${href}`),
    Stack,
    Tabs,
    Link: ({ children }: any) => React.createElement(View, { testID: 'link' }, children),
  };
});

jest.mock('@expo/vector-icons', () => {
  const React = require('react');
  const { View } = require('react-native');
  return {
    Ionicons: (props: any) => React.createElement(View, { accessibilityLabel: 'icon', ...props }),
  };
});

// Reanimated recommended mock
jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));

// Gesture handler setup (no-op in tests but avoids warnings)
jest.mock('react-native-gesture-handler', () => {
  return {};
});

// Picker simple mock to render children
jest.mock('@react-native-picker/picker', () => {
  const React = require('react');
  const { View, Text } = require('react-native');
  const Picker = ({ children, onValueChange }: any) => React.createElement(View, { testID: 'picker', onValueChange }, children);
  Picker.Item = ({ label }: any) => React.createElement(Text, { accessibilityRole: 'button' }, label);
  return { Picker };
});

// Expo Haptics functions mocked to spies
jest.mock('expo-haptics', () => ({
  NotificationFeedbackType: { Success: 'Success', Warning: 'Warning', Error: 'Error' },
  ImpactFeedbackStyle: { Heavy: 'Heavy', Light: 'Light', Medium: 'Medium', Rigid: 'Rigid', Soft: 'Soft' },
  selectionAsync: jest.fn(),
  notificationAsync: jest.fn(),
  impactAsync: jest.fn(),
}));
