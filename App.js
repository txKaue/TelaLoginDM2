import React ,{useState , useEffect} from "react";
import { View , KeyboardAvoidingView, Image, Text, TextInput, TouchableOpacity, StyleSheet, Animated} from "react-native";

export default function App(){

  const [offset] = useState(new Animated.ValueXY({x:0,y:90}));
  const [email, setEmail] = useState(""); // Estado para o email
  const [senha, setSenha] = useState(""); // Estado para a senha

  const handleEntrar = () => {
    setEmail("");
    setSenha("");
  };

  useEffect(()=> {
    Animated.spring(offset.y, {
      toValue: 0, 
      speed: 3,
      bounciness: 15,
      useNativeDriver: true
    }).start();

  },[]);

  return(
    <KeyboardAvoidingView style={styles.background} behavior="padding" enabled>
      <Animated.View style={[
          styles.container,
            {
              transform: [
                {translateY: offset.y}
              ]
            }
          ]}
        >

      <View style={styles.containerLogo}>

        <Image
          source={require('./assets/LogoSenai.png')}
          style={{ width: 300, height: 100 }}
        />

      </View>

      <View 
        style={styles.container2}>

        <TextInput 
          style={styles.input}
          placeholder="Email" 
          autoCorrect={false} 
          value={email}
          onChangeText={setEmail}
        />

        <TextInput 
          style={styles.input}
          placeholder="Senha" 
          autoCorrect={false} 
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}

        />

        <TouchableOpacity style={styles.btn} onPress={handleEntrar}>
          <Text style={styles.btnTxt}>Entrar</Text>
        </TouchableOpacity>

      </View>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DCDCDC",
  },
  containerLogo:{
    flex:1,
    justifyContent: "center",
  },
  container2:{
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  input:{
    backgroundColor:"#FFF",
    width:"105%",
    marginBottom:10,
    color:"#222",
    fontSize: 17,
    borderRadius: 10,
    padding:10,
    borderWidth:1,
    borderColor:"#AAA",
  },
  
  btn:{
    backgroundColor:"#35AAFF",
    width: "105%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    marginBottom: 20,
  },
  btnTxt:{
    color:"#FFF",
    fontSize: 18,
  },
  container: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    width: "80%",
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 10, 
    elevation: 5, 
    
  },
})