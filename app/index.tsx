import { Redirect } from 'expo-router';
import React from 'react';

type Props = {
  children?: React.ReactNode;
};

export default function RootIndex({ children }: Props) {
  return <Redirect href='/(home)' />;
}
