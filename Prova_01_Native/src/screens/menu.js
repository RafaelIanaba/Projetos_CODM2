import React from 'react';
import { Text, Image, View, TextInput, ScrollView } from 'react-native';
import styles from '../styles/styles';
import { Ionicons } from "@expo/vector-icons";
import amazonCaixas from '../../assets/amazon/amazonCaixas.png';
import listas from '../../assets/amazon/listas.png';
import ventilador from '../../assets/amazon/ventilador.png';
import kitProdutos from '../../assets/amazon/kitProdutos.png';
import livros from '../../assets/amazon/livros.png';
import sacolaIcone from '../../assets/amazon/sacolaIcone.png';
import amazonCaixa from '../../assets/amazon/amazonCaixa.png';
import presenteCaixa from '../../assets/amazon/presenteCaixa.png';
import etiquetaDesconto from '../../assets/amazon/etiquetaDesconto.png';
import alimentosCaixa from '../../assets/amazon/alimentosCaixa.png';
import panelas from '../../assets/amazon/panelas.png';
import racaoPetShop from '../../assets/amazon/racaoPetShop.png';


export default function Menu(){
    return<ScrollView>
        <View style={{flexDirection:"column"}}>
            <View style={styles.topo}>
                <Ionicons name='search' size={24} color="black" style={styles.icon}/>
                <TextInput style={styles.pesquisa} placeholder="Pesquisar na Amazon.com.br" 
                placeholderTextColor={'#a9a9a9'}
                />
            </View>
            <View style={styles.ContaDivisoria}>
                <Text style={styles.textoTituloConta}>
                    Seus Atalhos
                </Text>
            </View>
            <View style={styles.filaItens}>
                <View style={styles.itemMenu}>
                    <View style={styles.ImagemFundo}>
                        <Image source={amazonCaixas} style={styles.itemMenuImagem}/>
                    </View>
                    <Text style={styles.itemMenuTexto}>Seus Pedidos</Text>
                </View>
                <View style={styles.itemMenu}>
                    <View style={styles.ImagemFundo}>
                        <Image source={listas} style={styles.itemMenuImagem}/>
                    </View>
                    <Text style={styles.itemMenuTexto}>Suas listas</Text>
                </View>
                <View style={styles.itemMenu}>
                    <View style={styles.ImagemFundo}>
                        <Image source={ventilador} style={styles.itemMenuImagem}/>
                    </View>
                    <Text style={styles.itemMenuTexto}>Eletrônicos, TV e Áudio</Text>
                </View>
            </View>
            <View style={styles.filaItens}>
                <View style={styles.itemMenu}>
                    <View style={styles.ImagemFundo}>
                        <Image source={kitProdutos} style={styles.itemMenuImagem}/>
                    </View>
                    <Text style={styles.itemMenuTexto}>Mais por Menos</Text>
                </View>
                <View style={styles.itemMenu}>
                    <View style={styles.ImagemFundo}>
                        <Image source={livros} style={styles.itemMenuImagem}/>
                    </View>
                    <Text style={styles.itemMenuTexto}>Livros</Text>
                </View>
                <View style={styles.itemMenu}>
                    <View style={styles.ImagemFundo}>
                        <Image source={sacolaIcone} style={styles.itemMenuImagem}/>
                    </View>
                    <Text style={styles.itemMenuTexto}>Comprar novamente</Text>
                </View>
            </View>
            <View style={styles.ContaDivisoria}>
                <Text style={styles.textoTituloConta}>
                    Comprar por categoria
                </Text>
            </View>
            <View style={styles.filaItens}>
                <View style={styles.item}>
                    <Text style={styles.itemTexto}>Amazon Prime</Text>
                    <Image source={amazonCaixa} style={styles.itemImagem}/>
                </View>
                <View style={styles.item}>
                    <Text style={styles.itemTexto}>Presentes</Text>
                    <Image source={presenteCaixa} style={styles.itemImagem}/>
                </View>
                <View style={styles.item}>
                    <Text style={styles.itemTexto}>Ofertas e Descontos</Text>
                    <Image source={etiquetaDesconto} style={styles.itemImagem}/>
                </View>
            </View>
            <View style={styles.filaItens}>
                <View style={styles.item}>
                    <Text style={styles.itemTexto}>Alimentos e Bebidas</Text>
                    <Image source={alimentosCaixa} style={styles.itemImagem}/>
                </View>
                <View style={styles.item}>
                    <Text style={styles.itemTexto}>Saúde e Cuidados Pessoais</Text>
                    <Image source={panelas} style={styles.itemImagem}/>
                </View>
                <View style={styles.item}>
                    <Text style={styles.itemTexto}>Pet Shop</Text>
                    <Image source={racaoPetShop} style={styles.itemImagem}/>
                </View>
            </View>
        </View>
    </ScrollView>
}