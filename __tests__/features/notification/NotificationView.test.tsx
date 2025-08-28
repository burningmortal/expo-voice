import { NotificationView } from '@/features/notification/ui/NotificationView';
import { fireEvent, render, screen, waitFor } from '@testing-library/react-native';
import * as Haptics from 'expo-haptics';
import React from 'react';

describe('NotificationView', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('triggers selection haptic on item press by default', async () => {
    render(<NotificationView />);

    // Tap the first notification item
    const first = await screen.findByText('新しいフォロワー');
    fireEvent.press(first);

    await waitFor(() => {
      expect(Haptics.selectionAsync).toHaveBeenCalled();
    });
  });

  it('can switch to notification/impact types', async () => {
    render(<NotificationView />);

    // Switch to notification
    fireEvent.press(screen.getByText('notification'));
    const item = await screen.findByText('新しいフォロワー');
    fireEvent.press(item);
    await waitFor(() => expect(Haptics.notificationAsync).toHaveBeenCalled());

    // Switch to impact
    fireEvent.press(screen.getByText('impact'));
    fireEvent.press(item);
    await waitFor(() => expect(Haptics.impactAsync).toHaveBeenCalled());
  });
});
