import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';

export default function PaginaLogin(){
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/medicina.webp')} style={styles.logo}/>
            <TextInput placeholder='Email' style={styles.input}/>
            <TextInput placeholder='Senha' style={styles.input}/>
            <View style={styles.btn}>
                <Link to={{screen: 'Home'}} style={styles.btnTxt}>Login</Link>
            </View>
            <View style={styles.viewLinks}>
                <Link to={{screen: 'RecuperacaoSenha'}}>Esqueci a senha </Link>
                <Link to={{screen: 'Registro'}}>Cadastre-se </Link>
            </View>
        </View>
    )
}