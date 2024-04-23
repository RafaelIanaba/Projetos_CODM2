import React, {useState} from "react";
import { Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

export default function Register({navigation}){
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const [confirma, setCornfirma] = useState("");
    return<>
        <TextInput style={styles.input} placeholder="digite seu login" 
        placeholderTextColor={'#a9a9a9'}
        onChangeText={novoLogin => setLogin(novoLogin)}
        />
        <TextInput style={styles.input} placeholder="digite sua senha" 
        placeholderTextColor={'#a9a9a9'} 
        onChangeText={novaSenha => setSenha(novaSenha)}
        secureTextEntry={true}
        />
        <TextInput style={styles.input} placeholder="confirme a sua senha" 
        placeholderTextColor={'#a9a9a9'} 
        onChangeText={novoConfirma => setCornfirma(novoConfirma)}
        secureTextEntry={true}
        />
        <TouchableOpacity style={styles.botaoComprar} onPress={() => {
            navigation.navigate('Confirmation')
        }}>
            <Text style={styles.textoBotao} onPress={() => {
                console.log('Login:', login, '\n', 'Senha:', senha, '\n', 'Confirma:', confirma)
                navigation.navigate('Login')
            }}>
                Cadastrar Novo Usuário
            </Text>
        </TouchableOpacity>
    </>
}
