import { View, Text, StyleSheet } from "react-native";

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre Mim</Text>
      <Text style={styles.text}>
        Desenvolvedor full-stack focado em criar experiências modernas,
        rápidas e funcionais. Experiência com React Native, Next.js,
        Node.js e Spring Boot.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    backgroundColor:"#000",
    justifyContent:"center"
  },
  title:{
    fontSize:28,
    color:"#fff",
    marginBottom:20
  },
  text:{
    color:"#ccc",
    fontSize:18
  }
});
