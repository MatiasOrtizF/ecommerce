import {SafeAreaView, View, Text, TextInput, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import LoginService from '../service/LoginService';
import { useState } from 'react';
import { useCart } from '../hooks/cartContext';

export default function Login() {
    const {setToken, setIsSignedIn} = useCart();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validationLogin = () => {
        userData = {email, password}
        LoginService.loginUser(userData).then(response=> {
            setToken(response.data.token);
            setIsSignedIn(true);
        }).catch(error=> {
            console.log(error);
        })
    }

    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{marginTop: Platform.OS === "android" && Constants.statusBarHeight}}>
                <Text style={{alignSelf:"center", marginVertical: 15, fontWeight:700, fontSize: 20, color: "#FF9526"}}>SIGN IN</Text>
                <View style={{padding: 20}}>
                    <Text style={{marginTop: 20, color:"#FF9526"}}>Email</Text>
                    <TextInput
                        style={{
                            height: 40,
                            borderBottomWidth: 2,
                            borderBottomColor: '#FF9526'
                        }}
                        autoCapitalize='none'
                        placeholder='Email'
                        onChangeText={setEmail}
                    />
                    <Text style={{marginTop: 20, color:"#FF9526"}}>Password</Text>
                    <TextInput
                        style={{
                            height: 40,
                            borderBottomWidth: 2,
                            borderBottomColor: '#FF9526',
                        }}
                        autoCapitalize='none'
                        secureTextEntry={true}
                        placeholder='Password'
                        onChangeText={setPassword}
                    />
                </View>
                <View style={{paddingHorizontal: 20, marginTop: 25}}>

                <TouchableOpacity onPress={()=> validationLogin()} style={{borderColor: "#FF9526", borderWidth: 2, width:"100%", borderRadius: 35}}>
                    <Text style={{alignSelf: "center", paddingVertical: 10, color:"#FF9526", fontSize:17, fontWeight: 600}}>
                        LOGIN
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}