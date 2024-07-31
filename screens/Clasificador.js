import React, {useState} from "react";
import {Text, View, StyleSheet, Button, TextInput} from "react-native";


const Clasificador = () => {
    const [llamada, setLlamada] = useState('')
    const [valor, setValor]=useState('')
    const [result, setResult] = useState('')

    const getResultFromClasificar = async () => {
      try {
        const dataToSend = { llamada };
        console.log("JSON to send:", JSON.stringify(dataToSend, null, 2));
  
  
        const response = await fetch("http://10.116.1.222:80/clasificar", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ llamada, valor }),
        });
        const jsonData = await response.json();
        console.log("JSON received:", JSON.stringify(jsonData, null, 2));
        setResult(
          jsonData.label
        );
      } catch (error) {
        console.log(error);
      }
    };
    
  
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
        {"Ingrese el texto que desea conocer la clasificacion"}
        </Text>
        
        <TextInput style={styles.input} value={llamada} onChangeText={setLlamada} />
        <TextInput style={styles.input} value={valor} onChangeText={setValor} />
        <Button title={"Enviar"} onPress={getResultFromClasificar} />
        <Text style={styles.text}>{result}</Text>
      </View>
    );
  };


const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 10
    }
})
export default Clasificador