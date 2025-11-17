import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu Portfólio</Text>

      <Link href="/sobre" asChild>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Sobre</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/academico" asChild>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Experiência Acadêmica</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/profissional" asChild>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Experiência Profissional</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/projetos" asChild>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Projetos</Text>
        </TouchableOpacity>
      </Link>
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
  },
  btn:{
    width:"100%",
    padding:15,
    borderRadius:10,
    backgroundColor:"#444",
    marginBottom:15
  },
  btnText:{
    color:"#fff",
    textAlign:"center",
    fontSize:18
  }
});
