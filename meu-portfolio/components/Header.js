import { View, Text, Image, StyleSheet } from "react-native";

export default function Header({ title }) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/react-logo.png")} style={styles.logo} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 50,
    paddingBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#111",
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 8,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
