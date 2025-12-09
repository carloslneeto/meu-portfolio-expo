import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "./_layout";

export default function Projetos() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <View style={[styles.container, { backgroundColor: isDark ? "#000" : "#fff" }]}>
      <Text style={[styles.title, { color: isDark ? "#fff" : "#000" }]}>Projetos</Text>

      <Text style={[styles.subTitle, { color: isDark ? "#fff" : "#000" }]}>📘 InclusiveAid</Text>
      <Text style={[styles.text, { color: isDark ? "#bbb" : "#333" }]}>
        App focado na inclusão de pessoas com necessidades especiais.
      </Text>
      <Text style={[styles.text, { color: isDark ? "#bbb" : "#333" }]}>
        Tecnologias: Node.js
      </Text>

      <Text style={[styles.subTitle, { color: isDark ? "#fff" : "#000" }]}>💬 Rede Social Swift</Text>
      <Text style={[styles.text, { color: isDark ? "#bbb" : "#333" }]}>
        Rede social focada em conversas sobre fatos do momento.
      </Text>
      <Text style={[styles.text, { color: isDark ? "#bbb" : "#333" }]}>
        Tecnologias: HTML, CSS, JavaScript
      </Text>

      <Text style={[styles.subTitle, { color: isDark ? "#fff" : "#000" }]}>🖥 Projeto Backend</Text>
      <Text style={[styles.text, { color: isDark ? "#bbb" : "#333" }]}>
        Sistema backend para inclusão e remoção de currículos.
      </Text>
      <Text style={[styles.text, { color: isDark ? "#bbb" : "#333" }]}>
        Tecnologia: Node.js
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
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
    marginBottom: 12,
  },
});
