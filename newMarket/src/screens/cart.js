import React from 'react';
import { Text, Image, View, TouchableOpacity, ScrollView} from 'react-native';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR'

import asadoDeTira from '../../assets/produtos/asado_tira.png';
import tomahawk from '../../assets/produtos/tomahawk.png';
import styles from '../styles/styles';

const totalCompra = 336.88;


export default function Cart({navigation}){
    return<ScrollView>
            <Text style={styles.cestaCarnes}>Resumo das Compras</Text>

            <View style={styles.carnes}>
                <Image source={asadoDeTira} style={styles.imagemCarnes}/>
                <Text style={styles.itens}> Asado de Tira</Text>
                <Text style={styles.precoItens}>{
                    Intl.NumberFormat('pt-BR',{
                        style:'currency', currency:'BRL'
                    }).format(146.96)
                }
                </Text>
                <TouchableOpacity style={styles.botaoAdd}>
                    <Text style={styles.textAdicionar}>Adicionar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.carnes}>
                <Image source={tomahawk} style={styles.imagemCarnes}/>
                <Text style={styles.itens}> Tomahawk</Text>
                <Text style={styles.precoItens}>{
                    Intl.NumberFormat('pt-BR',{
                        style:'currency', currency:'BRL'
                    }).format(189.90)
                }
                </Text>
                <TouchableOpacity style={styles.botaoAdd}>
                    <Text style={styles.textAdicionar}>Adicionar</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.nomeAcougue}>Total</Text>

            <Text style={styles.precoCesta}>{
                Intl.NumberFormat('pt-BR',{
                    style:'currency', currency:'BRL'
                }).format(totalCompra)
            }
            </Text>

            <TouchableOpacity style={styles.botaoComprar} onPress={()=>{
                navigation.navigate('Check')
            }}>
                <Text style={styles.textAdicionar}>Finalizar Compra</Text>
            </TouchableOpacity>
    </ScrollView>
}