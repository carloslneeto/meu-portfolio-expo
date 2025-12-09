import { View, Text, StyleSheet } from "react-native";

export default function Projetos() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projetos</Text>

      <Text style={styles.text}>🚀 Rede Social com Back4App</Text>
      <Text style={styles.text}>📱 App de Conversões (React Native)</Text>
      <Text style={styles.text}>🧠 IA + Spring Boot</Text>
      <Text style={styles.text}>🌐 Portfólio em Next.js</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  text: {
    color: "#ccc",
    fontSize: 18,
    marginBottom: 12,
  },
});
