import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get('screen').width

export default StyleSheet.create({
    tela:{
        flex:1,
    },
/**************************LOGIN**************************************************************************/
    amazonLogo:{
        width: 320,
        height: 120,
        margin: 50,
        alignSelf:'center'
    },
    input:{
        height:40,
        marginHorizontal:25,
        marginBottom:20,
        borderWidth:1,
        padding:10,
        backgroundColor:'white',
        borderRadius:6,
        borderColor:'#fcad03'// Adicionando a cor da borda
    },
    botaoLogar:{
        width:180,
        marginHorizontal:50,
        marginVertical:30,
        backgroundColor:"#fcad03",
        paddingVertical:16,
        borderRadius:6,
        alignSelf:'center'
    },
    textoBotao:{
        color:'white',
        textAlign:'center',
        fontSize:16,
        lineHeight:26,
        fontWeight:'bold'
    },
    descricaoLogin:{
        marginTop:30,
        marginHorizontal:35,
        fontSize:12,
        lineHeight:26,
        paddingHorizontal:12,
        textAlign:'center'
    },
/**************************HOME**************************************************************************/
    topo:{
        flexDirection:"row",
        height:80,
        alignItems:'flex-end',
        backgroundColor:'#0ff8fc'
    },
    pesquisa:{
        width: 300,
        height:40,
        marginVertical:11,
        marginHorizontal:5,
        borderWidth:1,
        padding:10,
        backgroundColor:'white',
        borderRadius:6,
        borderColor:'#42f5e6'
    },
    icon:{
        marginBottom:15,
        marginHorizontal:10
    },
    textoTopo:{
        marginLeft:5,
        fontSize:15,
        textAlign:'center'
    },
    filaItens:{
        flexDirection:"row",
        alignSelf:'center',
        marginTop:10
    },
    item:{
        flexDirection:"column",
        width:100,
        height:120,
        backgroundColor:'white',
        marginHorizontal:10,
        borderRadius:6
    },
    itemTexto:{
        marginLeft:4,
        flexShrink: 1, // Adicione isso para permitir que o texto encolha para caber na largura disponível
        flexWrap: 'wrap',
        maxWidth: 80
    },
    itemImagem:{
        width:100,
        height:85
    },
    contagem:{
        height:50,
        marginTop:10,
        justifyContent: 'center',
        backgroundColor:'#f7790a'
    },
    contagemTexto:{
        fontSize:21,
        fontWeight:'300',
        alignSelf:'center'
        
    },
/**************************CONTA**************************************************************************/
    topoConta:{
        flexDirection:"row",
        height:80,
        alignItems:'flex-end',
        marginBottom:5
    },
    logoMenor:{
        flex: 1,
        width:100,
        height:50,
        marginLeft:2,
        marginRight:170
    },
    iconConta:{
        marginHorizontal:8,
        marginBottom:15
    },
    textoTopoConta:{
        marginLeft:5,
        fontSize:15,
        textAlign:'center'
    },
    iconSeta:{
        marginHorizontal:6,
        marginBottom:5,
        marginTop:2,
        fontSize:18
    },
    botoesConta:{
        flexDirection:"column",
        alignItems:'center',
        justifyContent:'center'
    },
    botaoConta:{
        width:150,
        height:38,
        marginHorizontal:5,
        marginVertical:5,
        borderRadius:50,
        alignSelf:'center',
        justifyContent:'center',
        borderColor: '#51d6ac', 
        borderWidth: 1 // Adicionando a largura da borda
    },
    textoBotaoConta:{
        textAlign:'center',
        fontSize:14,
        lineHeight:26
    },
    ContaDivisoria:{
        flexDirection:"row",
        marginVertical:8,
        marginHorizontal:5
    },
    textoTituloConta:{
        flex: 1,
        fontSize:15,
        fontWeight:'bold',
        textAlign:'left'
        
    },
    textoRedirecionamento:{
        fontSize:13,
        color:'#6f85bd',
        textAlign:'right'
    },
/**************************MENU**************************************************************************/
    ImagemFundo:{
        width:90,
        height:90,
        backgroundColor:'white',
        marginHorizontal:10,
        borderRadius:6
    },
    itemMenuImagem:{
        width:90,
        height:90
    },
    itemMenuTexto:{
        marginLeft:4,
        marginTop:8,
        marginBottom:8,
        alignSelf:'center',
        fontSize:11,
        fontWeight:'bold',
        flexShrink: 1, 
        flexWrap: 'wrap',
        maxWidth: 80
    },
/**************************CARRINHO**************************************************************************/
    CarrinhoDivisoria:{
        marginVertical:10,
        alignSelf:'center',
        flexShrink: 1, 
        flexWrap: 'wrap',
        maxWidth: 300
    },
    textoCarrinhoDivisoria:{
        flex: 1,
        fontSize:15,
        fontWeight:'bold',
        marginLeft:5
    },
    botaoCarrinho:{
        width:340,
        marginVertical:5,
        backgroundColor:"#edcb0c",
        paddingVertical:8,
        borderRadius:18,
        alignSelf:'center',
        alignItems:'center'
    },
    CheckingFundo:{
        width:25,
        height:25,
        backgroundColor:'white',
        marginHorizontal:20,
        borderRadius:8,
        alignSelf:'center',
        alignItems:'center'
    },
    textoCarrinhoChecking:{
        fontSize:15,
        marginHorizontal:20,
        flexShrink: 1, 
        flexWrap: 'wrap',
        maxWidth: 300,
        justifyContent:'center'
    },
    textoCarrinhoDesmarcar:{
        marginLeft:3,
        fontSize:13,
        color:'#6f85bd'
    },
    itemCarrinho:{
        width:120,
        height:120,
        backgroundColor:'white',
        marginHorizontal:10,
        borderRadius:6
    },
    itemCarrinhoImagem:{
        width:120,
        height:120
    },
    textosCarrinho:{
        flexDirection:"column",
        marginLeft:5
    },
    textoCarrinhoColuna:{
        fontSize:15,
        flexShrink: 1, 
        flexWrap: 'wrap',
        maxWidth: 130
    },
    textoCarrinhoNegrito:{
        fontSize:15,
        fontWeight:'bold'
    },
    textoCarrinhoEstoque:{
        fontSize:15,
        color:'#03fc45'
    },
    textoCarrinhoApple:{
        fontSize:15,
        color:'#6f85bd'
    },
    BotaoDivisoria: {
        flexDirection: "row",
        marginHorizontal: 15
    },
    botaoCarrinhoQuantidade: {
        width: 25,
        height: 25,
        backgroundColor: 'white',
        borderRadius: 6,
        alignContent:'center',
        justifyContent:'center',
        borderColor: '#51d6ac', 
        borderWidth: 1
    },
    textoQuantidade:{
        fontSize:18,
        color:'#6f85bd',
        alignSelf:'center',
        justifyContent:'center'
    },
    textoBotaoCarrinho:{
        fontSize:18,
        alignSelf:'center',
        justifyContent:'center'
    },
    retanguloCarrinhoQuantidade:{
        width:75,
        height:25,
        backgroundColor: 'white',
        borderRadius: 6,
        alignContent:'center',
        justifyContent:'center',
        borderColor: '#51d6ac',
        borderWidth: 1
    }
})
