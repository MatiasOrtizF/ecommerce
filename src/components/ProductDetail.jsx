import { StyleSheet, Text , FlatList, SafeAreaView , View , Image, Button, TouchableOpacity, Touchable, ScrollView } from 'react-native';
import products from '../data/Products.json';
import Constants from 'expo-constants';
import { useState } from 'react';
import { SvgXml } from 'react-native-svg';
import iconPlus from '../images/icon-plus';
import iconMinus from '../images/icon-minus';
import iconCart from '../images/icon-cart';
import iconDelete from '../images/icon-delete';
import RNPickerSelect from 'react-native-picker-select';


export default function ProductList() {
    
    const dataDetail = products.products[11];

    return (
        <View style={styles.container}>
            <Image style={{width:"100%" , height:250}} source={{uri: dataDetail.thumbnail}}></Image>
            <View style={{padding:20}} >
                <Text style={styles.title}>{dataDetail.title}</Text>
                <View style={{flexDirection:"row" , justifyContent:"space-between" , flexWrap:"wrap"}}>
                    {/* <Text>Rating: {dataDetail.rating}</Text> */}
                    <Text style={styles.category}>{dataDetail.category}</Text>
                    <Text style={styles.brand}>{dataDetail.brand}</Text>
                </View>
                <Text style={styles.description}>{dataDetail.description}</Text>
                <View style={{flexDirection:"row" , justifyContent:"space-between" , alignItems:"center"}}>
                    <View style={{flexDirection:"row"}}>
                        <Text style={styles.title}>${(dataDetail.price*dataDetail.discountPercentage/100).toFixed(2)}</Text>
                        <Text style={{marginLeft: 5 , color:"#bb7122" , backgroundColor:"#d3c0abd3" , alignSelf:"flex-start" , padding: 3 , fontWeight:"bold", borderRadius: 5}}>{dataDetail.discountPercentage}%</Text>
                    </View>
                    <Text style={styles.priceOld}>${dataDetail.price}</Text>
                </View>
                <View style={styles.stock}>
                    <TouchableOpacity>
                        <SvgXml xml={iconMinus}></SvgXml>
                    </TouchableOpacity>
                        <Text>0/{dataDetail.stock}</Text>
                    <TouchableOpacity>
                        <SvgXml xml={iconPlus}></SvgXml>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => addCart()}>
                    <Text style={{color:"white" , fontWeight:"bold"}}>Add to cart</Text>
                </TouchableOpacity> 
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor:"#867f7f36",
    },
    product: {
        flex: 1,
        overflow:"hidden",
        borderRadius: 7,
        backgroundColor: '#fff',
        margin: 10,
        flexDirection: "row",
        padding: 10,
    },
    brand: {
        fontWeight:"bold",
        fontSize: 17,
        textTransform: "uppercase",
        letterSpacing: 3,
        color:"green"
    },
    title: {
        fontWeight:"bold",
        fontSize: 25,
        marginVertical: 3,
    },
    category: {
        color: "#bb7122",
        fontSize: 17,
        fontWeight: "bold"
    },
    description: {
        color:"#7f8794d8",
        fontSize: 13,
        marginVertical: "2%"
    },
    button: {
        flexDirection:"row",
        backgroundColor:"#FF9526",
        alignItems:"center",
        justifyContent:"center",
        borderRadius: 7,
        padding: 10,
    },
    buttonMinusPlus: {
        alignItems:"center",
        justifyContent:"center",
        width: 20, 
        height: 20, 
        backgroundColor: "#867f7f36", 
        borderRadius: 10,
    },
    buttonCheckout: {
        backgroundColor:"#FF9526",
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 20,
    },
    stock: {
        flexDirection:"row" , 
        justifyContent:"space-between" , 
        alignItems:"center" , 
        backgroundColor: "#867f7f36",
        padding: 10,
        borderRadius: 7,
        marginVertical: 10,
    },
    priceOld: {
        fontWeight:"bold", 
        fontSize:16, 
        color:"#7f8794d8", 
        textDecorationLine:"line-through"
    }
    // count: {
    //     flexDirection: "row",
    //     justifyContent: "space-between",
    //     alignItems:"center",
    //     backgroundColor: "#F5F7FA",
    //     padding: 12,
    //     borderRadius: 7,
    //     marginVertical: 15,
    // },
    // description: {
    //     color: "#B0BAC9",
    //     marginVertical: 15,
    // },
    // priceDiscount: {
    //     fontWeight: "700",
    //     fontSize: 20,
    // },
    // price: {
    //     color:"#B0BAC9",
    //     textDecorationLine:"line-through"
    // },
    // discountPercentage: {
    //     backgroundColor:"#FFE8D9",
    //     color: "#FF9526",
    //     borderRadius: 7,
    //     padding: 2,
    // },
});