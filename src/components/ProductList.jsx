import { StyleSheet, Text , FlatList , View , ImageBackground , TouchableOpacity } from 'react-native';
import products from '../data/Products.json';
import Constants from 'expo-constants';
import { useState } from 'react';
import { useCart } from '../hooks/cartContext';


export default function ProductList() {
    const {addToCart} = useCart();

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
                                    <Text style={styles.title}> ${(product.price*product.discountPercentage/100).toFixed(2)} </Text>
                                    <TouchableOpacity style={styles.button} onPress={() => addToCart(product)}>
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
});