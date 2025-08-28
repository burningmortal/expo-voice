import { render, screen } from '@testing-library/react-native';
import React from 'react';

import HomeScreen from '@/features/home/screen/HomeScreen';
import MessageScreen from '@/features/message/screen/MessageScreen';
import NotificationScreen from '@/features/notification/screen/NotificationScreen';
import SearchScreen from '@/features/search/screen/SearchScreen';

describe('Feature screens', () => {
  it('HomeScreen renders Home content', () => {
    render(<HomeScreen />);
    expect(screen.getByText('Home')).toBeTruthy();
  });

  it('SearchScreen renders search input', () => {
    render(<SearchScreen />);
    expect(screen.getByPlaceholderText('Search...')).toBeTruthy();
  });

  it('NotificationScreen renders haptics title', () => {
    render(<NotificationScreen />);
    expect(screen.getByText('触覚フィードバック')).toBeTruthy();
  });

  it('MessageScreen renders conversations', () => {
    render(<MessageScreen />);
    expect(screen.getByText('ありな')).toBeTruthy();
  });
});
