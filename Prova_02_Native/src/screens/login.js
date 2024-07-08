import React, {useState} from 'react';
import { Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles/styles';
import logoIte from '../../assets/imagens/logoIte.png';


export default function Login({navigation}){
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");

    return<ScrollView>
        <Text style={styles.loginTitulo}>Faça seu login!</Text>

        <Image source={logoIte} style={styles.iteLogo}/>

        <TextInput style={styles.loginInput} placeholder="Digite aqui o seu login" 
        onChangeText={novoLogin => setLogin(novoLogin)}
        />

        <TextInput style={styles.loginInput} placeholder="Digite aqui a sua senha" 
        onChangeText={novaSenha => setSenha(novaSenha)}
        secureTextEntry={true}
        />

        <TouchableOpacity style={styles.botaoLogar} onPress={() => {
                navigation.navigate('Noticias')
            }}>
            <Text style={styles.textoBotao}>Logar</Text>
        </TouchableOpacity>
    </ScrollView>
}