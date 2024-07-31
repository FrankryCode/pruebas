
import { StyleSheet, View, Text, StatusBar, Button, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
//import Video from 'react-native-video';
import present from '../assets/present.mp4';
//import { withRouter } from 'react-router-native';
import Clasificador from './Clasificador';


const linkedin = <Icon name={'linkedin'} size={30} color={'black'}/>



 export default function HomeScreen({ navigation }){



    return (
      
      
        <View style={styles.container} >
             <StatusBar style="ligth"/>
             
            
            <Text style={styles.text} >Frank ALdana</Text>
            <View style={styles.buttonContainer}>

                <TouchableWithoutFeedback onPress={()=>Linking.openURL('https://linkedin.com/')}>
                    {linkedin}
                </TouchableWithoutFeedback>
             

            </View>

            <TouchableOpacity style={[styles.buttonContainer]} onPress={() => navigation.navigate('Clasificador')}>
                           
            <Text style={styles.buttonText2}>Habla con tu coach</Text>
          </TouchableOpacity>
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
    text:{
        color: "#000",
    },
    buttonContainer: {
        
        marginTop: 20,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
      backgroundColor: 'white',
      borderRadius: 25,
      paddingVertical: 30,
      paddingHorizontal: 10,
      marginHorizontal: 2,
      flex: 1,
      borderWidth: 2,
      borderColor: '#7FB3D5',
    },
    coachLayout: {
      marginLeft: 10,
    },
    buttonText2: {
      
      color: 'black',
      fontSize: 12,
      textAlign: 'center',
    }
  });
  

  