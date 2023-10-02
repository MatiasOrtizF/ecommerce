import { useContext } from "react";
import { CartContext } from "../context/useCart";

export const useCart = () => {
    const context = useContext(CartContext)

    return context
}