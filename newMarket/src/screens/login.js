import React, {useState} from "react";
import { Text, TextInput, Image, View, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles/styles';
import logo from '../../assets/logo.png';

export default function Login({navigation}){
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    return<ScrollView>
        <View style={styles.login}>
            <Image source={logo} style={styles.imagemLogin}/>
        </View>
        <Text style={styles.cestaCarnes}>Açougue do Osmar</Text>
        <TextInput style={styles.input} placeholder="Digite seu login aqui" 
        placeholderTextColor={'#a9a9a9'}
        onChangeText={novoLogin => setLogin(novoLogin)}
        />
        <TextInput style={styles.input} placeholder="Digite sua senha aqui" 
        placeholderTextColor={'#a9a9a9'}
        onChangeText={novaSenha => setSenha(novaSenha)}
        secureTextEntry={true}
        />
        <TouchableOpacity style={styles.botaoComprar}>
            <Text style={styles.textoBotao} onPress={() => {
                console.log('Login:', login, '\n', 'Senha:', senha)
                navigation.navigate('Market')
            }}>
                Logar
            </Text>
        </TouchableOpacity>
        <Text style={styles.descricaoLogin}>
                Crie sua conta agora mesmo!
        </Text>
        <Text style={styles.nomeLogin} onPress={() => {
            navigation.navigate('Register')
        }}>
            Cadastre-se
        </Text>
    </ScrollView>
}