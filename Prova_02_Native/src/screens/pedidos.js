import React from 'react';
import { Text, Image, View, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles/styles';
import { Ionicons } from "@expo/vector-icons";
import logoIte from '../../assets/imagens/logoIte.png';
import servicos from '../../assets/imagens/servicos.png';
import boletos from '../../assets/imagens/boletos.png';


export default function Pedidos({navigation}){
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
                    Qual é o seu pedido?
                </Text>
            </View>

            <View style={styles.pedidos}>
                <Image style={styles.pedidosImagem} source={servicos}/>

                <TouchableOpacity style={styles.botaoPedidos}>
                    <Text style={styles.textoBotao} onPress={() => {
                        navigation.navigate('Servicos')
                    }}>
                        Serviços
                    </Text>
                </TouchableOpacity>

                <Image style={styles.pedidosImagem} source={boletos}/>

                <TouchableOpacity style={styles.botaoPedidos}>
                    <Text style={styles.textoBotao} onPress={() => {
                        navigation.navigate('Boletos')
                    }}>
                        Boletos
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
}