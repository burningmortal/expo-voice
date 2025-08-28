import { MessageView } from '@/features/message/ui/MessageView';
import { render, screen } from '@testing-library/react-native';
import React from 'react';

describe('MessageView', () => {
  it('renders conversations list', () => {
    render(<MessageView />);

    // Known users present
    expect(screen.getByText('ありな')).toBeTruthy();
    expect(screen.getByText('みな')).toBeTruthy();
    expect(screen.getByText('すず')).toBeTruthy();
    expect(screen.getByText('ゆい')).toBeTruthy();
  });

  it('shows avatar initial for conversation', () => {
    render(<MessageView />);
    expect(screen.getByText('あ')).toBeTruthy();
  });
});
