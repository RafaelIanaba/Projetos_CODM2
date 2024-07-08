import React from 'react';
import { Text, Image, View, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';
import { Ionicons } from "@expo/vector-icons";
import logoIte from '../../assets/imagens/logoIte.png';


export default function Boletos({navigation}){
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

            <View style={styles.boleto}>
                <View style={{flexDirection:"row"}}>
                    <Text style={styles.boletoTextoNegrito}>Tipo:</Text>
                    <Text style={styles.boletoTexto}>* EMITIR BOLETO NO SITE *</Text>
                </View>

                <View style={{flexDirection:"row"}}>
                    <Text style={styles.boletoTextoNegrito}>Vencimento:</Text>
                    <Text style={styles.boletoTexto}>01/06/2024</Text>
                </View>

                <View style={{flexDirection:"row"}}>
                    <Text style={styles.boletoTextoNegrito}>Valor:</Text>
                    <Text style={styles.boletoTexto}>R$ 525,14</Text>
                </View>

                <View style={{flexDirection:"row"}}>
                    <Text style={styles.boletoTextoNegrito}>Observações:</Text>
                    <Text style={styles.boletoTexto}>**Segunda via só pode ser retirada pelo site do Banco, acessar a Área do aluno.</Text>
                </View>
            </View>
            
            <View style={styles.pedidos}>
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