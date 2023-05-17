import { StyleSheet, Text , FlatList, SafeAreaView , View , Image, Button, ImageBackground , TouchableOpacity, Touchable, ScrollView } from 'react-native';
import products from '../data/Products.json';
import Constants from 'expo-constants';
import { useEffect, useState } from 'react';
import { SvgXml } from 'react-native-svg';
import iconPlus from '../images/icon-plus';
import iconMinus from '../images/icon-minus';
import iconCart from '../images/icon-cart';
import iconDelete from '../images/icon-delete';
import RNPickerSelect from 'react-native-picker-select';
import { useCart } from '../hooks/cartContext';


export default function ProductList() {
    const [count , setCount] = useState(0);
    
    const [selectedValue, setSelectedValue] = useState('');
    const [totalPrice , setTotalPrice] = useState(0);

    const {cart,removeFromCart} = useCart();

    const pickerItems = [
        { label: 'Opción 1', value: 'opcion1' },
        { label: 'Opción 2', value: 'opcion2' },
        { label: 'Opción 3', value: 'opcion3' }
    ];

    const minus = (id) => {
        console.log("RESTA " + id);
    }

    const plus = (id) => {
        console.log("SUMAR " + id);
    }

    const borrar = (id) => {
        console.log("borrar " + id)
    }

    return (
        <View style={styles.container}>

            <FlatList style={{flex:0.75}}
                data={cart}
                renderItem={({item: product}) => (
                    <View style={styles.product}>
                            <View style={{flex:0.35 , justifyContent:"center" , alignItems:"center" , width:"100%" , height: "100%"}}>
                                <ImageBackground style={{width:"100%" , height: "100%" , resizeMode: "stretch" , border: 10 }} source={{uri:product.thumbnail}}>
                                    <Text style={{ fontSize: 13 , backgroundColor:"blue" , borderBottomRightRadius: 7 , padding: 2 , alignSelf:"flex-start" , color:"#fff"}} >
                                        {product.discountPercentage}%
                                    </Text>
                                </ImageBackground>
                            </View>     
                            <View style={{flex:0.65 , marginHorizontal: 20}}>
                                <View>
                                    <View style={{flexDirection:"row" , justifyContent:"space-between" , alignItems:"center"}}>
                                        <Text style={styles.title}> {product.title} </Text>
                                        <TouchableOpacity onPress={()=> removeFromCart(product)}>
                                            <SvgXml xml={iconDelete}></SvgXml>
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={styles.description} numberOfLines={2} ellipsizeMode='tail' > {product.description} </Text>
                                </View>
                                <View style={{flexDirection:"row" , alignItems:"center" , justifyContent:"space-between"}}>
                                    <Text style={styles.title}> ${(product.price*product.discountPercentage/100).toFixed(2)} </Text>
                                    <View style={{flexDirection:"row" , alignItems:"center"}}>
                                        <TouchableOpacity style={styles.buttonMinusPlus} onPress={()=> minus(product.id)} >
                                            <SvgXml xml={iconMinus}></SvgXml>
                                        </TouchableOpacity>
                                            <Text style={{marginHorizontal: 5}}>1</Text>
                                        <TouchableOpacity style={styles.buttonMinusPlus} onPress={()=> plus(product.id)} >
                                            <SvgXml xml={iconPlus}></SvgXml>
                                        </TouchableOpacity>
                                    </View>
                                </View>                               
                            </View>
                    </View>
                
                )}
                keyExtractor={item=>item.id}
            />
            
            <View style={{ backgroundColor: 'black', height: 1.5 }} />
            <View style={{flex:0.15 , padding:10 , justifyContent:"center"}}>
                <Text style={styles.title}>Total Price:</Text>
                <View style={{flexDirection:"row" , justifyContent:"space-between" , alignItems:"center"}}>
                    <Text style={{fontSize:23 , fontWeight:"bold" , color:"#FF9526"}}>${totalPrice}</Text>
                    <TouchableOpacity style={styles.buttonCheckout}>
                        <Text style={{color:"white" , fontSize:15 , fontWeight:"bold"}}>Chekout</Text>
                    </TouchableOpacity> 
                </View>
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
    title: {
        fontWeight:"bold",
        fontSize: 16,
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
        borderRadius: 10,
        padding: 5,
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