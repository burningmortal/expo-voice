import { SearchView } from '@/features/search/ui/SearchView';
import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';

describe('SearchView', () => {
  it('renders list and filters by query', () => {
    render(<SearchView />);

    // Initial list contains a known item
    expect(screen.getByText('Expo')).toBeTruthy();

    const input = screen.getByPlaceholderText('Search...');
    fireEvent.changeText(input, 'メッセージ');

    expect(screen.getByText('メッセージ')).toBeTruthy();
  });

  it('shows empty component when no matches', () => {
    render(<SearchView />);
    const input = screen.getByPlaceholderText('Search...');
    fireEvent.changeText(input, 'zzz-not-found');
    expect(screen.getByText('結果がありません')).toBeTruthy();
  });
});
