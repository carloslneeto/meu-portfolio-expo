import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "./_layout";

export default function Academico() {
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
        Cursos Acadêmicos
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
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
  },
});
