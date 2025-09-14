import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

export default function PrimaryButton({ title, onPress }: any) {
  const { theme } = useContext(ThemeContext);
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: theme.colors.primary }]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { paddingVertical: 12, paddingHorizontal: 20, borderRadius: 12, alignItems: 'center' },
  text: { color: '#fff', fontWeight: 'bold' },
});