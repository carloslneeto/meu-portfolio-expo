import { View, Text, StyleSheet } from "react-native";

export default function Profissional() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiência Profissional</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    padding:20,
    backgroundColor:"#111"
  },
  title:{
    fontSize:32,
    color:"#fff",
    fontWeight:"bold",
    marginBottom:40
  }
});
