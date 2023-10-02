import { StyleSheet, Text , FlatList, SafeAreaView , View , Image, Button, TouchableOpacity, Touchable, ScrollView } from 'react-native';
import products from '../data/Products.json';
import Constants from 'expo-constants';
import { useState } from 'react';
import { SvgXml } from 'react-native-svg';
import iconPlus from '../images/icon-plus';
import iconMinus from '../images/icon-minus';
import iconCart from '../images/icon-cart';
import RNPickerSelect from 'react-native-picker-select';

export default function Profile() {
    return (
        <View style={{marginTop: Constants.statusBarHeight}}>

            <Text style={{color:"red", fontWeight:"bold"}}>Profile</Text>
        </View>
    );
}