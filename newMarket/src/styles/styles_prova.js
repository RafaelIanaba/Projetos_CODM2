import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get('screen').width

export default StyleSheet.create({
    amazonLogo:{
        width: 200,
        height: 100,
        margin: 50,
        alignSelf:'center'
    },
    input:{
        height:40,
        margin:12,
        borderWidth:1,
        padding:10,
        backgroundColor:'white',
        borderRadius:6,
        borderColor:'#fcad03'
    },
    botaoLogar:{
        width:180,
        margin: 50,
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
        margin: 50,
        fontSize:12,
        lineHeight:26,
        paddingHorizontal:12,
        textAlign:'center'
    },
    pesquisa:{
        width: width,
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
        marginVertical:15,
        marginHorizontal:10
    },
    






    tela:{
        flex:1,
    },
    cestaCarnes:{
        fontSize:26,
        lineHight:42,
        fontWeight:"bold",
        textAlign:"center",
        color:'red',
    },
    acougue:{
        flexDirection:"row",
        paddingVertical:12

    },
    nomeAcougue:{
        fontWeight:"bold",
        fontSize:16,
        marginLeft:12,
        lineHeight:40
    },
    imagemAcougue:{
        width:42,
        height:42
    },
    descricaoAcougue:{
        color:"#a3a3a3",
        fontSize:16,
        lineHeight:26,
        paddingHorizontal:12
    },
    precoCesta:{
        color:"#8B0000",
        fontWeight:"bold",
        fontSize:32,
        lineHeight:42,
        marginTop:8,
        paddingHorizontal:12
    },
    
    
    descricaoLista:{
        fontWeight:'bold',
        fontSize:14,
        textAlign:'center'
    },
    carnes:{
        //estilo da View
        flexDirection:'row',
        paddingVertical:12,
        //altere o espaçamento dentro da view
        paddingHorizontal:12,
        justifyContent:'space-between' 
    },
    imagemCarnes:{
        //estilo da carne(quadradinho da carne)
        width:60,
        height:60
    },
    itens:{
        //estilo texto detro da view
        fontSize:16,
        lineHeight:55,
        marginLeft:1,
        fontWeight:'bold',
        textAlign:'center'
    },
    precoItens:{
        //estilo texto valor da carne detro da view
        fontSize:16,
        lineHeight:55,
        marginLeft:1,
        fontWeight:'bold',
        textAlign:'center',
        color:'red'
    },
    botaoAdd:{
        width:75,
        height: 35,
        backgroundColor: "#8B0000",
        borderRadius: 6,
        marginHorizontal: 5,
        marginVertical: 10,
    },
    textAdicionar:{
        color: 'white',
        textAlign: 'center',
        fontSize: 12,
        padding: 10,
        fontWeight: 'bold', 
    },
    


    login:{
        flexDirection:"row",
        justifyContent:'center',
        paddingVertical:5
    },
    imagemLogin:{
        height:150,
        width:150,
    },
    
    nomeLogin:{
        fontWeight:"bold",
        fontSize:16,
        marginLeft:12,
        lineHeight:40,
        textAlign:'center'
    },





})