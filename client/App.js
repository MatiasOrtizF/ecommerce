import { CartProvider } from './src/context/useCart.jsx';
import Navigation from './Navigation.js';

export default function App() {
    return (
        <CartProvider>
            <Navigation/>
        </CartProvider>
    );
}