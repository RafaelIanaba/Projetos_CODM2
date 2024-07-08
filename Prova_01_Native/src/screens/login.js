import React, {useState} from 'react';
import { Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles/styles';
import amazonLogo from '../../assets/amazon/amazon_logo.png';


export default function Login(){
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    return<ScrollView>
        <Image source={amazonLogo} style={styles.amazonLogo}/>
        <TextInput style={styles.input} placeholder="Digite seu login aqui" 
        placeholderTextColor={'#a9a9a9'}
        onChangeText={novoLogin => setLogin(novoLogin)}
        />
        <TextInput style={styles.input} placeholder="Digite sua senha aqui" 
        placeholderTextColor={'#a9a9a9'}
        onChangeText={novaSenha => setSenha(novaSenha)}
        secureTextEntry={true}
        />
        <TouchableOpacity style={styles.botaoLogar}>
            <Text style={styles.textoBotao}>
                Logar
            </Text>
        </TouchableOpacity>
        <Text style={styles.descricaoLogin}>
                Todos os Direitos reservados - Igor Turto Soluções
        </Text>
    </ScrollView>
}