import { Text, FlatList, View, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import {useEffect, useState } from 'react';
import { SvgXml } from 'react-native-svg';
import iconPlus from '../images/icon-plus';
import iconMinus from '../images/icon-minus';
import iconDelete from '../images/icon-delete';
import { useCart } from '../hooks/cartContext';
import CartEmpty from '../components/CartEmpty';
import styles from '../components/Styles';
import Checkout from '../components/Checkout';

export default function ProductList() {
    const {addToCart, minus, removeFromCart, cartList, cart} = useCart();

    useEffect(()=> {
        cartList();
    }, [])

    return (
        <>
        {cart.length > 0 ? 
            <SafeAreaView style={{flex: 1}}>
                <View style={{marginTop: Platform.OS === "android" && Constants.statusBarHeight, flex: 1, backgroundColor:"#867f7f36"}}>
                    <FlatList style={{flex:0.75}}
                        data={cart}
                        renderItem={({item: product}) => (
                            <View style={[styles.product, {flexDirection: "row", padding: 10}]}>
                                <View style={{flex:0.35 , justifyContent:"center" , alignItems:"center" , width:"100%" , height: "100%"}}>
                                    <ImageBackground style={{width:"100%" , height: "100%" , resizeMode: "stretch" , border: 10 }} source={{uri:product.image}}>
                                        <Text style={{ fontSize: 13 , backgroundColor:"blue" , borderBottomRightRadius: 7 , padding: 2 , alignSelf:"flex-start" , color:"#fff"}} >
                                            {product.discountPercentage}%
                                        </Text>
                                    </ImageBackground>
                                </View>     
                                <View style={{flex:0.60, marginLeft: 15, marginRight: 5}}>
                                    <View>
                                        <View style={{flexDirection:"row" , justifyContent:"space-between" , alignItems:"center"}}>
                                            <Text style={styles.title}> {product.title} </Text>
                                        </View>
                                        <Text style={styles.description} numberOfLines={2} ellipsizeMode='tail'> {product.description} </Text>
                                    </View>
                                    <View style={{flexDirection:"row" , alignItems:"center" , justifyContent:"space-between"}}>
                                        <Text style={styles.title}> ${(product.price*product.discountPercentage/100).toFixed(2)} </Text>
                                        <View style={{flexDirection:"row" , alignItems:"center"}}>
                                            <TouchableOpacity style={styles.buttonMinusPlus} onPress={()=> minus(product)} >
                                                <SvgXml xml={iconMinus}></SvgXml>
                                            </TouchableOpacity>
                                                <Text style={{marginHorizontal: 5}}>{product.quantity}</Text>
                                            <TouchableOpacity style={styles.buttonMinusPlus} onPress={()=> addToCart(product)} >
                                                <SvgXml xml={iconPlus}></SvgXml>
                                            </TouchableOpacity>
                                        </View>
                                    </View>                               
                                </View>
                                <View style={{flex:0.05}}>
                                    <TouchableOpacity onPress={()=> removeFromCart(product.cartId)}>
                                        <SvgXml xml={iconDelete}></SvgXml>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                        keyExtractor={item=>item.id}
                    />

                    <Checkout/>

                </View>
            </SafeAreaView>
        :
            <CartEmpty/>
        }
        </>
    );
}