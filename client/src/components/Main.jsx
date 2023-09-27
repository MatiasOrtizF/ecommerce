import { StyleSheet, Text, View } from 'react-native';
import ProductList from './ProductList.jsx';
import Cart from './Cart.jsx';

export default function Main() {
    return (
        <View style={{marginTop: Constants.statusBarHeight}}>
            <ProductList/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
});