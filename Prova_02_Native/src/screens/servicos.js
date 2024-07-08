import React from 'react';
import { Text, Image, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles/styles';
import { Ionicons } from "@expo/vector-icons";
import logoIte from '../../assets/imagens/logoIte.png';


export default function Servicos({navigation}){
    return<ScrollView>
        <View style={{flexDirection:"column"}}>

            <View style={styles.cabecalho}>
                <Text style={styles.saudacao}>Olá, Aluno!</Text>

                <TouchableOpacity onPress={() => {
                        navigation.navigate('Noticias')
                    }}>
                    <Image style={styles.logoIteMenor} source={logoIte} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                        navigation.navigate('Eventos')
                    }}>
                    <Ionicons style={styles.logoIteMenor} name='notifications-circle-outline' size={24} color="white"/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                        navigation.navigate('Login')
                    }}>
                    <Ionicons style={styles.logoIteMenor} name='log-out-outline' size={24} color="white"/>
                </TouchableOpacity>
            </View>

            <View style={styles.pedidosTitulo}>
                <Text style={styles.pedidosTexto}>
                    Selecione o serviço que deseja solicitar
                </Text>
            </View>

            <View style={styles.servicosPesquisaFundo}>
                <TextInput style={styles.servicosPesquisa} placeholder="Digite qual serviço você desejar solicitar"/>
            </View>

            <View style={styles.pedidos}>
                <TouchableOpacity style={styles.botaoPedidos}>
                    <Text style={styles.textoBotao}>
                        ENVIAR SOLICITAÇÃO
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoPedidos}>
                    <Text style={styles.textoBotao} onPress={() => {
                        navigation.navigate('Pedidos')
                    }}>
                        RETORNAR
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
}