import { useContext } from "react";
import { CartContext } from "../components/CartC";

export const useCart = () => {
    const context = useContext(CartContext)

    return context
}