import { StyleSheet, Text , FlatList, SafeAreaView , View , ImageBackground, Button, TouchableOpacity, Touchable } from 'react-native';
import products from '../data/Products.json';
import Constants from 'expo-constants';
import { useState } from 'react';
import { SvgXml } from 'react-native-svg';
import iconPlus from '../images/icon-plus';
import iconMinus from '../images/icon-minus';
import iconCart from '../images/icon-cart';
import RNPickerSelect from 'react-native-picker-select';


export default function ProductList() {
    const [count , setCount] = useState(0);
    
    const [selectedValue, setSelectedValue] = useState('');

    const pickerItems = [
        { label: 'Opción 1', value: 'opcion1' },
        { label: 'Opción 2', value: 'opcion2' },
        { label: 'Opción 3', value: 'opcion3' }
    ];

    const minus = () => {
        console.log("RESTA");
    }

    const plus = () => {
        console.log("SUMAR");
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={products.products}
                renderItem={({item: product}) => (
                    <View style={styles.product}>
                            <View style={{flex:0.5}}>
                                <ImageBackground style={{width:"100%" , height: 100}} source={{uri:product.thumbnail}}>
                                    <Text style={{ fontSize: 13 , backgroundColor:"blue" , borderBottomRightRadius: 7 , padding: 2 , alignSelf:"flex-start" , color:"#fff"}} >
                                        {product.discountPercentage}%
                                    </Text>
                                </ImageBackground>
                            </View>     
                            <View style={{flex:0.5 , justifyContent:"space-between" , padding: 10}}>
                                <View style={{marginBottom:10}}>
                                    <Text style={styles.title}> {product.title} </Text>
                                    <Text style={styles.category}> {product.category} </Text>
                                </View>
                                <View style={{flexDirection:"row" , justifyContent:"space-between" , alignItems:"center"}}>
                                    <Text style={styles.title}> ${product.price} </Text>
                                    <TouchableOpacity style={styles.button}>
                                        <Text style={{color:"white" , fontSize:12 , fontWeight:"bold"}}>Add to cart</Text>
                                    </TouchableOpacity> 
                                </View>
                            </View>
                    </View>
                
                )}
                keyExtractor={item=>item.id}
                numColumns={2}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flex: 1,
    },
    product: {
        flex: 1,
        overflow:"hidden",
        borderRadius: 7,
        backgroundColor: '#fff',
        margin: 10,
    },
    title: {
        fontWeight:"bold",
        fontSize: 16,
    },
    category: {
        color:"#7f8794d8",
        fontSize: 13,
    },
    button: {
        flexDirection:"row",
        backgroundColor:"#FF9526",
        alignItems:"center",
        justifyContent:"center",
        borderRadius: 10,
        padding: 5,
    },
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