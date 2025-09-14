import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

export default function Card({ children, style }: any) {
  const { theme } = useContext(ThemeContext);
  return <View style={[styles.card, { backgroundColor: theme.colors.card }, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: { padding: 15, borderRadius: 12, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 2, marginBottom: 12 },
});