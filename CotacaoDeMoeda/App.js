import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {React, useState} from 'react'
import { StatusBar } from 'expo-status-bar';



export default function App() {
  const[json, setJson] = useState("");
  const[cotacao, setCotacao] = useState("");
  return (
    <View style={styles.container}>
      <Text>Cotação:</Text>
      <TextInput
        style = {styles.textInput}
        multiline
        onChangeText={text => setJson(jparse(text))}
      />
      <Button 
        title='USD -> BRL'
        onPress={() => setCotacao(json)}
      ></Button>
      <Text>R$: {cotacao.usd ? cotacao.usd.brl : ""}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: '#dbdbdb'
  }
});

function jparse (text){
  try {
    return JSON.parse(text)
  } catch (error) {
    return ""
  }
}

