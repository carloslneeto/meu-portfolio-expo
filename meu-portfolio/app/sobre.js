import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "./_layout";

export default function Sobre() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? "#000" : "#fff" },
      ]}
    >
      <Text style={[styles.title, { color: isDark ? "#fff" : "#000" }]}>
        Sobre o App
      </Text>

      <Text style={[styles.text, { color: isDark ? "#bbb" : "#333" }]}>
        🎯 Este app foi desenvolvido como um portfólio pessoal.
      </Text>

      <Text style={[styles.subTitle, { color: isDark ? "#fff" : "#000" }]}>
        📘 Formação
      </Text>

      <Text style={[styles.text, { color: isDark ? "#bbb" : "#333" }]}>
        • Sistemas para Internet – UNICAP (2024.1–2026.1)
      </Text>

      <Text style={[styles.text, { color: isDark ? "#bbb" : "#333" }]}>
        • Técnico em Administração – Grau (2025–2027)
      </Text>

      <Text style={[styles.subTitle, { color: isDark ? "#fff" : "#000" }]}>
        🛠 Tecnologias Utilizadas
      </Text>

      <Text style={[styles.text, { color: isDark ? "#bbb" : "#333" }]}>
        • React Native + Expo Router
      </Text>
      <Text style={[styles.text, { color: isDark ? "#bbb" : "#333" }]}>
        • JavaScript
      </Text>
      <Text style={[styles.text, { color: isDark ? "#bbb" : "#333" }]}>
        • Navegação com Expo Router
      </Text>

      <Text style={[styles.subTitle, { color: isDark ? "#fff" : "#000" }]}>
        ✨ Funcionalidade Extra
      </Text>

      <Text style={[styles.text, { color: isDark ? "#bbb" : "#333" }]}>
        • Tema claro/escuro integrado.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 22,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
  },
});
