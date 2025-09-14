import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AutocompleteInput({ value, onChange, suggestions = [], placeholder = '' }: any) {
  const [filtered, setFiltered] = useState<string[]>([]);

  const handleChange = (text: string) => {
    onChange(text);
    if (text.length > 0) {
      setFiltered(suggestions.filter((s: string) => s.toLowerCase().includes(text.toLowerCase())));
    } else setFiltered([]);
  };

  return (
    <View style={{ marginBottom: 10 }}>
      <TextInput style={styles.input} value={value} onChangeText={handleChange} placeholder={placeholder} />
      {filtered.length > 0 && (
        <FlatList
          data={filtered}
          keyExtractor={(item, i) => `${item}-${i}`}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => { onChange(item); setFiltered([]); }}>
              <Text style={styles.suggestion}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 8 },
  suggestion: { padding: 10, backgroundColor: '#eee', borderBottomWidth: 1, borderBottomColor: '#ccc' },
});