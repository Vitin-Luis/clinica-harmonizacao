import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';



export default function Home(){
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/harmonizacao.webp')} style={styles.logo}/>
            <Text style={styles.text}>VENHA FAZER SUA HARMONIZAÇÃO FACIAL DE IMEDIATO!!</Text>
            <View style={styles.butao}>
                <TouchableOpacity style={styles.btn}>Ficar Bonito</TouchableOpacity>
                <Text style={styles.text}>Consultório especialista em harmonização facial e procedimentos, agende já seu concerto clicando no botão ficar bonito!!</Text>
            </View>
        </View>
    )
}