import React from 'react';
import { Text, Image, View, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles/styles';
import { Ionicons } from "@expo/vector-icons";
import logoIte from '../../assets/imagens/logoIte.png';


export default function Eventos({navigation}){
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

            <View style={styles.evento}>
                <Text style={styles.eventoTitulo}>Ano Letivo 2024</Text>
                <Text style={styles.eventoTexto}>Dia: 01/01/2024</Text>
                <Text style={styles.eventoTexto}>O dia todo</Text>
            </View>

            <View style={styles.evento}>
                <Text style={styles.eventoTitulo}>Feriado Nacional [Confraternização Universal]</Text>
                <Text style={styles.eventoTexto}>Dia: 01/01/2024</Text>
                <Text style={styles.eventoTexto}>O dia todo</Text>
            </View>

            <View style={styles.evento}>
                <Text style={styles.eventoTitulo}>Recesso Docentes</Text>
                <Text style={styles.eventoTexto}>Dia: 01/01/2024</Text>
                <Text style={styles.eventoTexto}>Fim: 20/01/2024</Text>
            </View>
            
            <View style={styles.evento}>
                <Text style={styles.eventoTitulo}>Vencimento da 1ª mensalidade escolar [1/12]</Text>
                <Text style={styles.eventoTexto}>Dia: 08/01/2024</Text>
                <Text style={styles.eventoTexto}>O dia todo</Text>
            </View>
        </View>
    </ScrollView>
}