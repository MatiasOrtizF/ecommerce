import { Text, View } from 'react-native';

export default function CartEmpty() {
    return (
        <View style={{ flex:1 , alignItems:"center" , justifyContent:"center"}}>
            <Text style={{ fontWeight:"bold" , fontSize:25 }} >Your cart is empty.</Text>
        </View> 
    );
}