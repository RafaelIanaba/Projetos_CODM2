import React from 'react';
import { Text, Image, View, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles/styles';
import { Ionicons } from "@expo/vector-icons";
import amazonLogo from '../../assets/amazon/amazon_logo.png';
import controle from '../../assets/amazon/produtos/controle_sony.png';
import alexa from '../../assets/amazon/produtos/alexa.png';
import smartwatch from '../../assets/amazon/produtos/smartwatch.png';
import fones from '../../assets/amazon/produtos/fones.png';
import celularXiaomi from '../../assets/amazon/produtos/celularXiaomi.png';
import tablet from '../../assets/amazon/produtos/tablet.png';


export default function Conta(){
    return<ScrollView>
        <View style={{flexDirection:"column"}}>
            <View style={styles.topoConta}>
                <Image source={amazonLogo} style={styles.logoMenor}/>
                <Ionicons name='notifications' size={24} color="black" style={styles.iconConta}/>
                <Ionicons name='search' size={24} color="black" style={styles.iconConta}/>
            </View>
            <View style={{flexDirection:"row"}}>
                <Ionicons name='person' size={24} color="black" style={styles.icon}/>
                <Text style={styles.textoTopoConta}>
                    Olá, Igor
                </Text>
                <Ionicons name='arrow-down' size={24} color="black" style={styles.iconSeta}/>
            </View>
            <View style={styles.botoesConta}>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity style={styles.botaoConta}>
                        <Text style={styles.textoBotaoConta}>Seus Pedidos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botaoConta}>
                        <Text style={styles.textoBotaoConta}>Comprar Novamente</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.botoesConta}>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity style={styles.botaoConta}>
                        <Text style={styles.textoBotaoConta}>Sua Conta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botaoConta}>
                        <Text style={styles.textoBotaoConta}>Suas Listas</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.ContaDivisoria}>
                <Text style={styles.textoTituloConta}>
                    Seus Pedidos
                </Text>
                <Text style={styles.textoRedirecionamento}>
                    Ver tudo
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
            <View style={styles.ContaDivisoria}>
                <Text style={styles.textoTituloConta}>
                    Continue Comprando
                </Text>
                <Text style={styles.textoRedirecionamento}>
                    Ver tudo
                </Text>
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
        </View>
    </ScrollView>
}