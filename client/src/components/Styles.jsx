import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
    //Cart 
    description: {
        color:"#7f8794d8",
        fontSize: 13,
        marginVertical: "2%"
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

export default styles;