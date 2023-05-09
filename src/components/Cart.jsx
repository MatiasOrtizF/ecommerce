import { StyleSheet, Text , FlatList, SafeAreaView , View , ImageBackground , Button, TouchableOpacity, Touchable } from 'react-native';
import products from '../data/Products.json';
import Constants from 'expo-constants';
import iconPlus from '../images/icon-plus';
import iconMinus from '../images/icon-minus';
import { SvgXml } from 'react-native-svg';

export default function Cart() {
    const product = products.products[0];
    return (
        <View style={styles.container}>

            <View style={styles.product}>
                <View style={{flex:0.35}}>
                    <ImageBackground style={{width:"100%" , height: 100}} source={{uri:product.thumbnail}}>
                        <Text style={{ fontSize: 13 , backgroundColor:"blue" , borderBottomRightRadius: 7 , padding: 2 , alignSelf:"flex-start" , color:"#fff"}} >
                            {product.discountPercentage}%
                        </Text>
                    </ImageBackground>
                </View>  

                <View style={{flex:0.65}}>
                    <Text style={styles.title}> {product.title} </Text>
                    <Text style={styles.description}> {product.description} </Text>
                        <View style={{flexDirection:"row" , alignItems:"center"}}>
                            <Text style={styles.title}> ${product.price} </Text>
                            <Text style={styles.title}> ${product.price} </Text>
                        </View>
                        <View style={{flexDirection:"row" , alignItems:"center"}}>
                            <SvgXml xml={iconPlus}></SvgXml>
                                <Text>1</Text>
                            <SvgXml xml={iconMinus}></SvgXml>
                        </View>
                </View>

            </View>   

            <View style={styles.product}>
                <View style={{flex:0.35}}>
                <ImageBackground style={{width:"100%" , height: 100}} source={{uri:product.thumbnail}}>
                        <Text style={{ fontSize: 13 , backgroundColor:"blue" , borderBottomRightRadius: 7 , padding: 2 , alignSelf:"flex-start" , color:"#fff"}} >
                            {product.discountPercentage}%
                        </Text>
                    </ImageBackground>
                </View>  

                <View style={{flex:0.65}}>
                    <Text style={styles.title}> {product.title} </Text>
                    <Text style={styles.description}> {product.description} </Text>
                        <View style={{flexDirection:"row" , alignItems:"center"}}>
                            <Text style={styles.title}> ${product.price} </Text>
                            <Text style={styles.title}> ${product.price} </Text>
                        </View>
                        <View style={{flexDirection:"row" , alignItems:"center"}}>
                            <SvgXml xml={iconPlus}></SvgXml>
                                <Text>1</Text>
                            <SvgXml xml={iconMinus}></SvgXml>
                        </View>
                </View>

            </View>   

            <View style={styles.product}>
                <View style={{flex:0.35}}>
                    <ImageBackground style={{width:"100%" , height: 100}} source={{uri:product.thumbnail}}>
                        <Text style={{ fontSize: 13 , backgroundColor:"blue" , borderBottomRightRadius: 7 , padding: 2 , alignSelf:"flex-start" , color:"#fff"}} >
                            {product.discountPercentage}%
                        </Text>
                    </ImageBackground>
                </View>  

                <View style={{flex:0.65}}>
                    <Text style={styles.title}> {product.title} </Text>
                    <Text style={styles.description}> {product.description} </Text>
                        <View style={{flexDirection:"row" , alignItems:"center"}}>
                            <Text style={styles.title}> ${product.price} </Text>
                            <Text style={styles.title}> ${product.price} </Text>
                        </View>
                        <View style={{flexDirection:"row" , alignItems:"center"}}>
                            <SvgXml xml={iconPlus}></SvgXml>
                                <Text>1</Text>
                            <SvgXml xml={iconMinus}></SvgXml>
                        </View>
                </View>

            </View>   

                <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }} />

                <View style={styles.total}>
                    <Text>Total Price:</Text>
                    <View style={{flexDirection:"row" , justifyContent:"space-between"}}>
                        <Text>350.00</Text>
                        <TouchableOpacity style={styles.button}>
                                <Text style={{color:"white" , fontSize:12 , fontWeight:"bold"}}>Checkout</Text>
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
    },
    product: {
        flex: 1,
        flexDirection:"row",
        padding: 10,
        height: 100,
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
    total: {
        
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