import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';


export default function RecuperacaoSenha(){
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/medicina.webp')} style={styles.logo}/>
            <TextInput placeholder='Email' style={styles.input}/>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>Recuperar Senha</Text>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen: 'Registro'}}>Cadastre-se </Link>
                <Link to={{screen: 'PaginaLogin'}}>Voltar para o Login </Link>
            </View>
        </View>
    )
}