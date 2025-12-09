import { View, Text, StyleSheet } from "react-native";

export default function Academico() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiência Acadêmica</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#000",
    justifyContent:"center",
    padding:20
  },
  title:{
    color:"#fff",
    fontSize:28,
    fontWeight:"bold"
  }
});
