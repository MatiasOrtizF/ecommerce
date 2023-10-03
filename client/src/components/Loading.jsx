import { View, ActivityIndicator } from "react-native";

export default function Loading() {
    return(
        <View style={{flex: 1, justifyContent:"center", alignItems:"center"}}>
            <ActivityIndicator size="large" color="#FF9526"/>
        </View>
    );
}