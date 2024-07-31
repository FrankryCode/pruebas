
import { StyleSheet, View, Image } from 'react-native';
import Icon from '../assets/ucelog.png';

 export default function SplashScreen(){
    return (
        <View style={styles.container} >
            <View>
                <Image source = {Icon} style={styles.image}/>
            </View> 
        </View>
    );
 }

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image:{
        width:100,
        height:100,
        alignContent:"center",
    }
  });
  

  