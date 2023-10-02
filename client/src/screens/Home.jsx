import { Platform, Text, View, SafeAreaView, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { useCart } from '../hooks/cartContext';
import Constants from 'expo-constants';
import { useEffect } from 'react';
import styles from '../components/Styles';

export default function Home() {
    const {products, listProducts, addToCart} = useCart();

    useEffect(()=> {
        listProducts();
    }, [])

    return (
        <SafeAreaView>
            <View style={{marginTop: Platform.OS === "android" && Constants.statusBarHeight}}>
                    <FlatList
                        data={products}
                        renderItem={({item: product}) => (
                            <View style={styles.product}>
                                    <View style={{flex:0.5}}>
                                        <ImageBackground style={{width:"100%" , height: 100}} source={{uri:product.image}}>
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
                                            <TouchableOpacity style={styles.button} onPress={() => addToCart(product.id)}>
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
        </SafeAreaView>
    );
}