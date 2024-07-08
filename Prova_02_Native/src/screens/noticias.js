import React from 'react';
import { Text, TouchableOpacity, Image, View, ScrollView } from 'react-native';
import styles from '../styles/styles';
import { Ionicons } from "@expo/vector-icons";
import logoIte from '../../assets/imagens/logoIte.png';
import noticiaLoraAlliance from '../../assets/imagens/noticiaLoraAlliance.png';
import noticiaSantander from '../../assets/imagens/noticiaSantander.png';


export default function Noticias({navigation}){
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

            <View style={styles.noticia}>
                <Image style={styles.noticiaImagem} source={noticiaLoraAlliance}/>
                <Text style={styles.noticiaTitulo}>ITE é membro institucional da LoRa Alliance no Brasil</Text>
                <Text style={styles.noticiaSubTitulo}>A ITE se tornou membro institucional da LoRa Alliance no Brasil,
                 tecnologia comparável ao Wi-Fi em sua...</Text>
            </View>
            
            <View style={styles.noticia}>
                <Image style={styles.noticiaImagem} source={noticiaSantander}/>
                <Text style={styles.noticiaTitulo}>'Santander X' está com inscrições abertas</Text>
                <Text style={styles.noticiaSubTitulo}>Em parceria com o Santander, ITE convoca participantes.
                 Estão abertas as inscrições para a XIX edição do Santander X,...</Text>
            </View>
        </View>
    </ScrollView>
}