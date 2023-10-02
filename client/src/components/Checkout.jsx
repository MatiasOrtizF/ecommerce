import { Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import styles from '../components/Styles';

export default function Checkout() {
    const [totalPrice , setTotalPrice] = useState(0);

    return (
        <>
            <View style={{ backgroundColor: 'black', height: 1.5 }} />

            <View style={{flex:0.15 , padding:10 , justifyContent:"center"}}>
                <Text style={styles.title}>Total Price:</Text>
                <View style={{flexDirection:"row" , justifyContent:"space-between" , alignItems:"center"}}>
                    <Text style={{fontSize:23 , fontWeight:"bold" , color:"#FF9526"}}>${totalPrice}</Text>
                    <TouchableOpacity style={styles.buttonCheckout}>
                        <Text style={{color:"white" , fontSize:15 , fontWeight:"bold"}}>Checkout</Text>
                    </TouchableOpacity> 
                </View>
            </View>
        </>
    );
}