import { View, Text, StyleSheet } from "react-native";

export default function Academico() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiência Acadêmica</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111",
  },
  title: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
  },
});
