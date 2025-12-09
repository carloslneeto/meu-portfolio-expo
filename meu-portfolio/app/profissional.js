import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "./_layout";

export default function Profissional() {
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
        Experiência Profissional
      </Text>

      <Text style={[styles.subTitle, { color: isDark ? "#fff" : "#000" }]}>
        🏬 Loja de Varejo – Assistente Administrativo
      </Text>
      <Text style={[styles.text, { color: isDark ? "#bbb" : "#333" }]}>
        • Contas a pagar e receber
      </Text>
      <Text style={[styles.text, { color: isDark ? "#bbb" : "#333" }]}>
        • Análise de sistemas
      </Text>
      <Text style={[styles.text, { color: isDark ? "#bbb" : "#333" }]}>
        • Gestão de estoque
      </Text>
      <Text style={[styles.text, { color: isDark ? "#bbb" : "#333" }]}>
        📅 Jul 2023 – Nov 2025
      </Text>

      <Text style={[styles.subTitle, { color: isDark ? "#fff" : "#000" }]}>
        💻 KarneKeijo – Estagiário de TI
      </Text>
      <Text style={[styles.text, { color: isDark ? "#bbb" : "#333" }]}>
        • Dashboards
      </Text>
      <Text style={[styles.text, { color: isDark ? "#bbb" : "#333" }]}>
        • Coleta de números
      </Text>
      <Text style={[styles.text, { color: isDark ? "#bbb" : "#333" }]}>
        • Suporte
      </Text>
      <Text style={[styles.text, { color: isDark ? "#bbb" : "#333" }]}>
        📅 Ago 2025 – Nov 2025
      </Text>

      <Text style={[styles.subTitle, { color: isDark ? "#fff" : "#000" }]}>
        🏢 PARVI – Estagiário Administrativo
      </Text>
      <Text style={[styles.text, { color: isDark ? "#bbb" : "#333" }]}>
        • Suporte administrativo
      </Text>
      <Text style={[styles.text, { color: isDark ? "#bbb" : "#333" }]}>
        📅 Dez 2025 – Atualmente
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 22,
    marginTop: 20,
    marginBottom: 5,
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
  },
});
