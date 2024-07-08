import React from 'react';
import { Text, TextInput, Image, View, ScrollView } from 'react-native';
import styles from '../styles/styles';
import { Ionicons } from "@expo/vector-icons";
import controle from '../../assets/amazon/produtos/controle_sony.png';
import alexa from '../../assets/amazon/produtos/alexa.png';
import smartwatch from '../../assets/amazon/produtos/smartwatch.png';
import fones from '../../assets/amazon/produtos/fones.png';
import celularXiaomi from '../../assets/amazon/produtos/celularXiaomi.png';
import tablet from '../../assets/amazon/produtos/tablet.png';
import celularIphone from '../../assets/amazon/produtos/celularIphone.png';
import televisao from '../../assets/amazon/produtos/televisao.png';
import laptop from '../../assets/amazon/produtos/laptop.png';


export default function Home(){
    return<ScrollView>
        <View style={{flexDirection:"column"}}>
            <View style={styles.topo}>
                <Ionicons name='search' size={24} color="black" style={styles.icon}/>
                <TextInput style={styles.pesquisa} placeholder="Pesquisar na Amazon.com.br" 
                placeholderTextColor={'#a9a9a9'}
                />
            </View>
            <View style={{flexDirection:"row"}}>
                <Ionicons name='pin' size={24} color="black" style={styles.icon}/>
                <Text style={styles.textoTopo}>
                    Enviar para Igor - Bauru 17000-000
                </Text>
            </View>
            <View style={styles.filaItens}>
                <View style={styles.item}>
                    <Text style={styles.itemTexto}>Continue comprando</Text>
                    <Image source={controle} style={styles.itemImagem}/>
                </View>
                <View style={styles.item}>
                    <Text style={styles.itemTexto}>Continue comprando</Text>
                    <Image source={alexa} style={styles.itemImagem}/>
                </View>
                <View style={styles.item}>
                    <Text style={styles.itemTexto}>Continue comprando</Text>
                    <Image source={smartwatch} style={styles.itemImagem}/>
                </View>
            </View>
            <View style={styles.filaItens}>
                <View style={styles.item}>
                    <Text style={styles.itemTexto}>Continue comprando</Text>
                    <Image source={fones} style={styles.itemImagem}/>
                </View>
                <View style={styles.item}>
                    <Text style={styles.itemTexto}>Continue comprando</Text>
                    <Image source={celularXiaomi} style={styles.itemImagem}/>
                </View>
                <View style={styles.item}>
                    <Text style={styles.itemTexto}>Continue comprando</Text>
                    <Image source={tablet} style={styles.itemImagem}/>
                </View>
            </View>
            <View style={styles.filaItens}>
                <View style={styles.item}>
                    <Text style={styles.itemTexto}>Continue comprando</Text>
                    <Image source={celularIphone} style={styles.itemImagem}/>
                </View>
                <View style={styles.item}>
                    <Text style={styles.itemTexto}>Continue comprando</Text>
                    <Image source={televisao} style={styles.itemImagem}/>
                </View>
                <View style={styles.item}>
                    <Text style={styles.itemTexto}>Continue comprando</Text>
                    <Image source={laptop} style={styles.itemImagem}/>
                </View>
            </View>
            <View style={styles.contagem}>
                <Text style={styles.contagemTexto}>
                    O App Day começa em 32:40:09
                </Text>
            </View>
        </View>
    </ScrollView>
}