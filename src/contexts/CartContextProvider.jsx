import { createContext, useEffect, useState } from "react";
import { getCartItems } from "../utils/cart-utils";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		const storedCartItems = getCartItems();
		setCartItems(storedCartItems);
	}, []);

	return (
		<CartContext.Provider value={{ cartItems, setCartItems }}>
			{children}
		</CartContext.Provider>
	);
};
export default CartContextProvider;
