import { FlatList, View, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import {useEffect } from 'react';
import { useCart } from '../hooks/cartContext';
import CartEmpty from '../components/CartEmpty';
import Checkout from '../components/Checkout';
import CartList from '../components/CartList';

export default function Cart() {
    const {cartList, cart} = useCart();

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
                            <CartList product={product}/>
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