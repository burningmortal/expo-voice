import { render, screen } from '@testing-library/react-native';
import React from 'react';

import RootLayout from '@/app/_layout';
import TabsLayout from '@/app/home/_layout';
import HomeIndex from '@/app/home/index';
import MessageIndex from '@/app/home/message';
import NotificationIndex from '@/app/home/notification';
import SearchIndex from '@/app/home/search';
import Index from '@/app/index';
import PostScreen from '@/app/post';

describe('App route components', () => {
  it('RootLayout renders a Stack', () => {
    render(<RootLayout />);
    expect(screen.getByTestId('stack')).toBeTruthy();
  });

  it('Home Tabs layout renders Tabs', () => {
    render(<TabsLayout />);
    expect(screen.getByTestId('tabs')).toBeTruthy();
  });

  it('Index redirects to /home', () => {
    render(<Index />);
    expect(screen.getByText('Redirect:/home')).toBeTruthy();
  });

  it('HomeIndex renders Home screen', () => {
    render(<HomeIndex />);
    expect(screen.getByText('Home')).toBeTruthy();
  });

  it('SearchIndex renders Search screen', () => {
    render(<SearchIndex />);
    expect(screen.getByPlaceholderText('Search...')).toBeTruthy();
  });

  it('NotificationIndex renders Notification screen', () => {
    render(<NotificationIndex />);
    expect(screen.getByText('触覚フィードバック')).toBeTruthy();
  });

  it('MessageIndex renders Message screen', () => {
    render(<MessageIndex />);
    expect(screen.getByText('ありな')).toBeTruthy();
  });

  it('PostScreen toggles button style when text entered', () => {
    const { getByText, getByPlaceholderText } = render(<PostScreen />);
    const btnText = getByText('Post');
    const pressable = (btnText.parent?.parent as any) ?? (btnText.parent as any);

    // Initially disabled -> disabled color present
    const initialStyle = JSON.stringify(pressable.props.style);
    expect(initialStyle).toContain('#bcdbe4');

    // Enter text -> primary color present
    const input = getByPlaceholderText("What's happening?");
    const { fireEvent } = require('@testing-library/react-native');
    fireEvent.changeText(input, 'hello');
    const updatedPressable = (getByText('Post').parent?.parent as any) ?? (getByText('Post').parent as any);
    const updatedStyle = JSON.stringify(updatedPressable.props.style);
    expect(updatedStyle).toContain('#0a7ea4');
  });
});
