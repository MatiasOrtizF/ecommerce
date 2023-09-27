import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {Image} from 'react-native';
import ProductList from './src/components/ProductList.jsx';
import Cart from './src/components/Cart.jsx';
import { CartProvider } from './src/components/CartC.jsx';

export default function App() {

    const Tab = createBottomTabNavigator();

    return (
        <CartProvider>
            <NavigationContainer>
                <Tab.Navigator screenOptions={{headerShown: false}}>
                    <Tab.Screen 
                        name="Home" 
                        component={ProductList} 
                        options={{
                            tabBarIcon: ({focused}) => (
                            <Image 
                                source={require('./src/images/home-icon.png')} 
                                style={{ width:25 , height:25 , tintColor: focused ? '#FF9526' : 'gray' }}
                            />
                            )
                        }}
                    />

                    <Tab.Screen 
                        name="Cart" 
                        component={Cart} 
                        options={{
                            tabBarIcon: ({focused}) => (
                            <Image 
                                source={require('./src/images/cart-icon.png')} 
                                style={{ width:25 , height:25 , tintColor: focused ? '#FF9526' : 'gray' }}
                            />
                            )
                        }}
                    />

                    {/* <Tab.Screen 
                        name="Profile" 
                        component={Profile} 
                        options={{
                            tabBarIcon: ({focused}) => (
                            <Image 
                                source={require('./src/images/profile-icon.png')} 
                                style={{ width:25 , height:25 , tintColor: focused ? '#FF9526' : 'gray' }}
                            />
                            ),
                        }}
                    /> */}
                    </Tab.Navigator>
            </NavigationContainer>
        </CartProvider>
    );
}


