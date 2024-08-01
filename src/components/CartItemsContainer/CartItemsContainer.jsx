import styles from "./CartItemsContainer.module.scss";
import CartItem from "../CartItem/CartItem";
import { useState, useEffect } from "react";

const CartItemsContainer = ({ onRemove }) => {
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
		setCartItems(storedCartItems);
	}, []);

	const handleRemoveCartItem = item => {
		const newCartItems = cartItems.filter(
			cartItem => cartItem.variantId !== item.variantId
		);
		setCartItems(newCartItems);
		localStorage.setItem("cart", JSON.stringify(newCartItems));
		onRemove(newCartItems);
	};

	return (
		<>
			<div className={styles.cartItemContainer}>
				{cartItems?.map(cartItem => (
					<CartItem
						key={cartItem.variantId}
						cartItem={cartItem}
						onRemove={handleRemoveCartItem}
					/>
				))}
			</div>
		</>
	);
};

export default CartItemsContainer;
