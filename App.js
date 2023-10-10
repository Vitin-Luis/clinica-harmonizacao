import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RecuperacaoSenha from './src/pages/recuperacaoSenha';
import PaginaLogin from './src/pages/login';
import Registro from './src/pages/registro';
import Home from './src/pages/home';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='PaginaLogin' component={PaginaLogin}/>
        <Stack.Screen name='Registro' component={Registro}/>
        <Stack.Screen name='RecuperacaoSenha' component={RecuperacaoSenha}/>
        <Stack.Screen name='Home' component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});