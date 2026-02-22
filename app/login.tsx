import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";

import LoginForm from "@/components/login-form";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function Login() {
  return (
    <ThemedView style={styles.container}>
      <Image
        source={require("@/assets/images/village.jpg")}
        style={styles.banner}
        contentFit="cover"
      />
      <View style={styles.card}>
        <ThemedText type="title" style={styles.title}>
          Masuk
        </ThemedText>
        <ThemedText type="subtitle" style={styles.subtitle}>
          Silakan masuk untuk melanjutkan
        </ThemedText>

        <LoginForm />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 0,
  },
  card: {
    borderRadius: 12,
    padding: 30,
  },
  title: {
    marginBottom: 8,
  },
  subtitle: {
    marginBottom: 20,
  },
  banner: {
    width: "100%",
    height: 140,
    marginBottom: 16,
    alignSelf: "center",
  },
});
