import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useThemeColor } from '@/hooks/use-theme-color';

export default function HomeScreen() {
  const router = useRouter();
  const tint = useThemeColor({}, 'tint');

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Selamat datang
      </ThemedText>

      <Pressable
        onPress={() => router.push('/login')}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: tint, opacity: pressed ? 0.9 : 1 },
        ]}
      >
        <ThemedText style={styles.buttonText}>Masuk</ThemedText>
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
  },
  button: {
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 28,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
