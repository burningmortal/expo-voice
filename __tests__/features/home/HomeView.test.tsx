import { HomeView } from '@/features/home/ui/HomeView';
import { render, screen } from '@testing-library/react-native';
import React from 'react';

describe('HomeView', () => {
  it('renders headings and cards', () => {
    render(<HomeView />);

    expect(screen.getByText('Home')).toBeTruthy();
    expect(screen.getByText('Getting Started')).toBeTruthy();
    expect(screen.getByText('Welcome back 👋')).toBeTruthy();
  });

  it('renders three pills', () => {
    render(<HomeView />);
    expect(screen.getByText('News')).toBeTruthy();
    expect(screen.getByText('Trends')).toBeTruthy();
    expect(screen.getByText('For you')).toBeTruthy();
  });
});
