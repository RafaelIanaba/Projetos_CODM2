import { StyleSheet, Dimensions } from "react-native";


export default StyleSheet.create({
    tela:{
        flex:1,
    },
/**************************Noticias**************************************************************************/
    cabecalho:{
        flexDirection:"row",
        height:50,
        alignItems:'flex-end',
        backgroundColor:'#20420d'
    },
    saudacao:{
        marginLeft:20,
        marginRight:100,
        fontSize:20,
        color:'black',
        alignSelf:'center',
    },
    logoIteMenor:{
        alignSelf:'center',
        width:30,
        height:30,
        marginHorizontal:5,
        marginBottom:10
    },
    noticia:{
        flexDirection:"column",
        width:'340',
        height:420,
        backgroundColor:'white',
        margin:5,
        borderColor: '#1c5757', 
        borderWidth: 1,
        borderRadius:10
    },
    noticiaImagem:{
        width:'100%',
        height:250,
        borderTopEndRadius:10,
        borderTopStartRadius:10
    },
    noticiaTitulo:{
        marginHorizontal:5,
        marginVertical:10,
        fontSize:20,
        fontWeight:'bold',
        alignSelf:'center',
    },
    noticiaSubTitulo:{
        marginHorizontal:5,
        marginTop:20,
        fontSize:15,
        alignSelf:'baseline'
    },
/**************************Eventos**************************************************************************/
    evento:{
        flexDirection:"column",
        height:150,
        paddingHorizontal:5,
        borderBottomWidth: 1,
        borderColor: 'black',
    },
    eventoTitulo:{
        marginHorizontal:5,
        marginTop:10,
        marginBottom:5,
        fontSize:20,
        fontWeight:'bold',
        textAlign:'left'
    },
    eventoTexto:{
        marginHorizontal:5,
        marginTop:10,
        fontSize:15,
        textAlign:'left'
    },
/**************************PEDIDOS**************************************************************************/
    pedidosTitulo:{
        marginVertical:40,
        alignSelf:'center',
    },
    pedidosTexto:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center'
    },
    pedidos:{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:'10%',
        flexDirection:"column",
    },
    pedidosImagem:{
        width:300,
        height:150,
        alignSelf:'center',
        borderRadius:10
    },
    botaoPedidos: {
        width: 280,
        backgroundColor: "#20420d",
        paddingVertical: 16,
        borderRadius: 10,
        marginVertical: 20
      },
      textoBotao: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        lineHeight: 26,
        fontWeight: 'bold',
      },
/**************************BOLETOS**************************************************************************/
    boleto:{
        flexDirection:"column",
        height:170,
        paddingHorizontal:5,
        borderBottomWidth: 1,
        borderColor: 'black',
    },
    boletoTextoNegrito:{
        marginLeft:15,
        marginTop:10,
        fontSize:15,
        fontWeight:'bold',
        textAlign:'left'
    },
    boletoTexto:{
        marginHorizontal:5,
        marginTop:10,
        fontSize:15,
        textAlign:'left'
    },
/**************************HOME**************************************************************************/
    servicosPesquisaFundo:{
        flexDirection:"row",
        height:50,
        alignSelf:'center'
    },
    servicosPesquisa:{
        width: 320,
        height:35,
        fontSize:17,
        borderWidth:1,
        backgroundColor:'white',
        borderRadius:6,
    },
/**************************LOGIN**************************************************************************/
    loginTitulo:{
        marginTop:20,
        fontSize:30,
        lineHight:45,
        fontWeight:"bold",
        textAlign:"center",
        color:'#20420d',
    },
    iteLogo:{
        width: 200,
        height: 200,
        margin: 30,
        alignSelf:'center',
        borderRadius:10,
        backgroundColor:'#20420d'
    },
    loginInput:{
        height:35,
        width:300,
        alignSelf:'center',
        marginBottom:20,
        borderWidth:1,
        padding:8,
        fontWeight:'bold',
        borderRadius:10,
        borderColor:'#20420d',
    },
    botaoLogar:{
        width:200,
        backgroundColor:"#20420d",
        paddingVertical:10,
        borderRadius:10,
        alignSelf:'center'
    }
})