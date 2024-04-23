import React from 'react';
import { Text, Image, View, TouchableOpacity, ScrollView} from 'react-native';
import styles from '../styles/styles';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR'
import imagemTopo from '../../assets/topo.png';
import logo from '../../assets/logo.png';
import asadoDeTira from '../../assets/produtos/asado_tira.png';
import denver from '../../assets/produtos/denver_steak.png';
import flat_iron from '../../assets/produtos/flat_iron.png';
import prime from '../../assets/produtos/prime_rib.png';
import tomahawk from '../../assets/produtos/tomahawk.png';

export default function Market(){
    return<ScrollView>
        <Image source={imagemTopo} style={styles.imagemTopo}/>
        <Text style={styles.cestaCarnes}>Cesta de Carnes</Text>
        <View style={styles.acougue}>
            <Image source={logo} style={styles.imagemAcougue}/>
            <Text style={styles.nomeAcougue}>Açougue do Osmar</Text>
        </View>
        <Text style={styles.descricaoAcougue}>
                As melhores e mais selecionadas carnes!
        </Text>
        <Text style={styles.descricaoAcougue}>
                produção própria, direto do nosso pasto 
        </Text>
        <Text style={styles.descricaoAcougue}>
                para a mesa da sua casa!
        </Text>
        <Text style={styles.precoCesta}>{
            Intl.NumberFormat('pt-BR',{
                style:'currency', currency:'BRL'
            }).format(278)
        }
        </Text>
        <TouchableOpacity style={styles.botaoComprar}>
            <Text style={styles.textoBotao}>Comprar</Text>
        </TouchableOpacity>
        <Text style={styles.descricaoLista}>Itens da Cesta de Compras</Text>


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
            <Image source={denver} style={styles.imagemCarnes}/>
            <Text style={styles.itens}> Denver Steak</Text>
            <Text style={styles.precoItens}>{
                Intl.NumberFormat('pt-BR',{
                    style:'currency', currency:'BRL'
                }).format(149.00)
            }
            </Text>
            <TouchableOpacity style={styles.botaoAdd}>
                <Text style={styles.textAdicionar}>Adicionar</Text>
            </TouchableOpacity>
        </View>
        
        <View style={styles.carnes}>
            <Image source={flat_iron} style={styles.imagemCarnes}/>
            <Text style={styles.itens}> Flat Iron</Text>
            <Text style={styles.precoItens}>{
                Intl.NumberFormat('pt-BR',{
                    style:'currency', currency:'BRL'
                }).format(130.00)
            }
            </Text>
            <TouchableOpacity style={styles.botaoAdd}>
                <Text style={styles.textAdicionar}>Adicionar</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.carnes}>
            <Image source={prime} style={styles.imagemCarnes}/>
            <Text style={styles.itens}> Prime Rib</Text>
            <Text style={styles.precoItens}>{
                Intl.NumberFormat('pt-BR',{
                    style:'currency', currency:'BRL'
                }).format(125.00)
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

    </ScrollView>
}