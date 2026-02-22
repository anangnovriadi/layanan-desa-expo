import React, { useState } from "react";
import { Alert, Pressable, StyleSheet, TextInput, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useRouter } from "expo-router";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const inputBg = useThemeColor(
    { light: "#F4F6F7", dark: "#1a1a1a" },
    "background",
  );
  const tint = useThemeColor({}, "tint");

  function onSubmit() {
    if (!email || !password) {
      Alert.alert("Error", "Email dan kata sandi wajib diisi");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // navigate to home and replace the login route so back doesn't return
      router.replace("/");
    }, 800);
  }

  return (
    <View>
      <ThemedText style={styles.label}>Email</ThemedText>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="you@example.com"
        keyboardType="email-address"
        autoCapitalize="none"
        style={[styles.input, { backgroundColor: inputBg }]}
      />

      <ThemedText style={[styles.label, { marginTop: 12 }]}>
        Kata sandi
      </ThemedText>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="••••••••"
        secureTextEntry
        style={[styles.input, { backgroundColor: inputBg }]}
      />

      <Pressable
        onPress={onSubmit}
        style={({ pressed }) => [
          styles.button,
          { opacity: pressed ? 0.85 : 1, marginTop: 18 },
        ]}
        accessibilityRole="button"
      >
        <ThemedText style={styles.buttonText}>
          {loading ? "Sedang masuk..." : "Login"}
        </ThemedText>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    marginBottom: 6,
  },
  input: {
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    backgroundColor: "#197fe6",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
