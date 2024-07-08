import React, { useState } from 'react';
import { Text, Image, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';
import { Ionicons } from "@expo/vector-icons";
import 'intl';
import 'intl/locale-data/jsonp/pt-BR'
import appleMacBook from '../../assets/amazon/produtos/appleMacBook.png';

const totalCompra = 10999.11;
const quantidade = 3;


export default function Carrinho(){
    const [isChecked, setIsChecked] = useState(false);
    const [quantidade, setQuantidade] = useState(3);
    const subtrairQuantidade = () => {
        if (quantidade > 0) {
            setQuantidade(quantidade - 1);
        }
    };
    const adicionarQuantidade = () => {
        if (quantidade < 9) {
            setQuantidade(quantidade + 1);
        }
    };
    return<ScrollView>
        <View style={{flexDirection:"column"}}>
            <View style={styles.topo}>
                <Ionicons name='search' size={24} color="black" style={styles.icon}/>
                <TextInput style={styles.pesquisa} placeholder="Pesquisar na Amazon.com.br" 
                placeholderTextColor={'#a9a9a9'}
                />
            </View>
            <View style={styles.CarrinhoDivisoria}>
                <Text style={styles.textoTituloConta}>
                    Mensagens sobre produtos em seu carrinho
                </Text>
            </View>
            <View style={styles.ContaDivisoria}>
                <Text>
                    Subtotal 
                </Text>
                <Text style={styles.textoCarrinhoDivisoria}>{
                    Intl.NumberFormat('pt-BR',{
                        style:'currency', currency:'BRL'
                    }).format(totalCompra)
                }
                </Text>
            </View>
            <TouchableOpacity style={styles.botaoCarrinho}>
                <Text>
                    Fechar pedido (4 itens)
                </Text>
            </TouchableOpacity>
            <View style={styles.ContaDivisoria}>
                <TouchableOpacity onPress={() => setIsChecked(!isChecked)} style={styles.CheckingFundo}>
                    {isChecked && <Ionicons name="checkmark" size={24} color="green" />}
                </TouchableOpacity>
                <Text style={styles.textoCarrinhoChecking}>
                    Enviar como presente, incluir mensagem personalizada
                </Text>
            </View>
            <View style={styles.ContaDivisoria}>
                <Text style={styles.textoCarrinhoDesmarcar}>
                    Desmarcar todos os itens
                </Text>
            </View>
            <View style={styles.ContaDivisoria}>
                <View style={styles.itemCarrinho}>
                    <Image source={appleMacBook} style={styles.itemCarrinhoImagem}/>
                </View>
                <View style={styles.textosCarrinho}>
                    <Text style={styles.textoCarrinhoColuna}>
                        Apple Macbook Air de 13 polegadas
                    </Text>
                    <Text style={styles.textoCarrinhoNegrito}>{
                        Intl.NumberFormat('pt-BR',{
                            style:'currency', currency:'BRL'
                        }).format(totalCompra)
                    }
                    </Text>
                    <Text style={styles.textoCarrinhoEstoque}>
                        Em estoque
                    </Text>
                    <Text style={styles.textoCarrinhoColuna}>
                        Vendido por:
                    </Text>
                    <Text style={styles.textoCarrinhoApple}>
                        Apple Brasil
                    </Text>
                </View> 
            </View>
            <View style={styles.BotaoDivisoria}>
                <TouchableOpacity style={styles.botaoCarrinhoQuantidade} onPress={subtrairQuantidade}>
                    <Text style={styles.textoBotaoCarrinho}>-</Text>
                </TouchableOpacity>
                <View style={styles.botaoCarrinhoQuantidade}>
                    <Text style={styles.textoQuantidade}>
                        {quantidade}
                    </Text>
                </View>
                <TouchableOpacity style={styles.botaoCarrinhoQuantidade} onPress={adicionarQuantidade}>
                    <Text style={styles.textoBotaoCarrinho}>+</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.retanguloCarrinhoQuantidade}>
                    <Text style={styles.textoBotaoCarrinho}>Excluir</Text>
                </TouchableOpacity> 
            </View>
        </View>
    </ScrollView>
}